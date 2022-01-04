<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p>이름 : {{userInfo.name}}</p>
    <p>나이 : {{userInfo.age}}</p>
    <p>직업 : {{userInfo.job}}</p>
    <strong>
      모든 유저 수 : {{ $store.getters.allUserCount }}<br/>
      서울 유저 수 : {{ seouls }}({{ percent }}%)
    </strong>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  computed:{
    ...mapState({
      //userInfo : state => state.userInfo // 방법 1
      userInfo : 'userInfo' //  방법 2
    }),
    // ...mapGetters(['countOfSeoul','percentOfSeoul'])
    ...mapGetters({
      count : 'allUserCount',
      seouls : 'countOfSeoul',
      percent: 'percentOfSeoul'
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
