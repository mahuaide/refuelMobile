/**
 * Created by Administrator on 2017/4/13.
 */
import * as types from './type'
import {lsWrite, lsRead} from '../common/js/ls'
export default {
  [types.LOGIN]: (state, data) => {
    state.user = data;
    lsWrite("user",data);
  },
  [types.LOGOUT]: (state) => {
    state.user={};
  },
  [types.LOADING_START]: (state,config) => {
    let start_time = new Date().getTime();
    let key = start_time+(Math.floor(Math.random()*(99999999-10000000+1)+10000000)+"");
    state.loading.push({
      key:key,
      loading:true,
      start_time:start_time
    })
    config.loadingKey=key;
  },
  [types.LOADING_END]: (state,key) => {
    state.loading.forEach(load=>{
      if(load.key == key){
        load.loading = false;
      }
    })
  },
}
