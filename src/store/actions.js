/**
 * Created by Administrator on 2017/4/13.
 */
import * as types from './type'

export default{
  [types.LOGIN]: ({commit}, data) => {
    commit(types.LOGIN, data);
  },
  [types.LOGOUT]: ({commit}) => {
    commit(types.LOGOUT)
  },
  [types.LOADING_START]:({commit,config})=>{
    commit(types.LOADING_START,config)
  },
  [types.LOADING_END]:({commit,key})=>{
    commit(types.LOADING_END,key)
  },
}
