/**
 * Created by Administrator on 2017/3/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);
const state={
  user: {},
  loading:[],
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
