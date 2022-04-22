import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //全局的对象
  state: {
    token: '',
    //获取userInfo解析成json格式
    userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
  },
  //想当于set发方法
  mutations: {
    // set
    //state是全局对象，token是传参
    SET_TOKEN: (state, token) => {
      state.token = token
      //存到浏览器的localStorage里面保存比较久
      localStorage.setItem("token", token)
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      //存到回话，以字符串的形式
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state) => {
      state.token = ''
      state.userInfo = {}
      localStorage.setItem("token", '')
      sessionStorage.setItem("userInfo", JSON.stringify(''))
    }

  },
  //想当于get方法
  getters: {
    // get
    getUser: state => {
      return state.userInfo
    }

  },
  actions: {
  },
  modules: {
  }
})
