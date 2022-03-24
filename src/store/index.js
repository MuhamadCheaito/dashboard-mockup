import { createStore } from "vuex";
import SearchService from '../services/searchservice';

const store = createStore({
    state:{
      acData:[],
      inputData: '',
    },
    mutations:{
        CHANGE_ACLIST(state,newList){
            state.acData = newList;
        },
        RESET_ACLIST(state){
            state.acData = [];
        },
        CHANGE_INPUT_DATA(state,text){
            state.inputData = text;
        }
    },
    actions: {
        async searchData({commit}, searchText){
            if(searchText.length >= 2){

                const { results } = await SearchService.search(searchText);

                await commit('CHANGE_ACLIST', results);
            }
        },
        resetData({commit}){
            commit('RESET_ACLIST');
        },
        changeInput({commit},text){
            commit('CHANGE_INPUT_DATA',text);
        }
    },
})

export default store;