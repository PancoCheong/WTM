import Vue from "vue";
import Vuex from "vuex";
import reqOrderManage from "../../service/manage/user-manage";
import createStore from "../base/index";
Vue.use(Vuex);
const newStore = createStore(reqOrderManage);
const getters = {
    tableList: state => state.tableData
};
export default new Vuex.Store({
    strict: true,
    state: { ...newStore.state },
    actions: { ...newStore.actions },
    getters: { ...getters },
    mutations: { ...newStore.mutations }
});