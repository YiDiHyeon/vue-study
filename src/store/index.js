import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // vue 인스턴스의 data 역할
    userInfo:{
      name:'디현',
      age:29,
      job:'developer'
    },
    userList:[
      {
        name:'디현',
        age:29,
        job:'developer',
        gender:'여자',
        address:'서울'
      },
      {
        name:'도걸',
        age:29,
        job:'developer',
        gender:'남자',
        address:'서울'
      },
      {
        name:'병무',
        age:32,
        job:'developer',
        gender:'남자',
        address:'경기'
      }
    ],
  },
  getters:{
    allUserCount: state =>{
      return state.userList.length
    },
    countOfSeoul: state => {
      let count = 0
      state.userList.forEach(user => {
        if (user.address === '서울') count++
      })
      return count
    },
    percentOfSeoul:(state,getters) =>{
      return Math.round(getters.countOfSeoul / getters.allUserCount * 100)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
