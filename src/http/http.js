/**
 * Created by Administrator on 2017/3/20.
 */
import axios from 'axios'
import store from '../store/store.js'
import * as types from '../store/type.js'
import router from '../router/index.js'

// axios 公共配置
axios.defaults.timeout = 60000;
if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = `http://${process.env.BASE_URL}`;
  //axios.defaults.baseURL = "http://192.168.0.37:3000";
  //axios.defaults.baseURL = "http://k2321512s9.imwork.net:16607";
  axios.defaults.baseURL = "http://111.192.33.202:3000";
} else {
  axios.defaults.baseURL = "http://localhost:3000";
  // axios.defaults.baseURL = "http://k2321512s9.imwork.net:16607";
}

axios.defaults.withCredentials = true;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    store.commit(types.LOADING_START,config);
    return config;
  },
  err => {
    store.commit(types.LOADING_END,err.config.loadingKey)
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    store.commit(types.LOADING_END,response.config.loadingKey)
    return response;
  },
  error => {
    if (error.response) {
      store.commit(types.LOADING_END,error.response.config.loadingKey)
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          if (router.currentRoute.path != '/login') {
            store.commit(types.LOGOUT);
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}
            })
          }
          break;
      }
    }
    return Promise.reject(error)
  });
export default axios;
