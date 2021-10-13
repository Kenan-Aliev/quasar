<template>
  <div class="loginPage">
    <div class="login">
      <h1 class="login__title">Instagram</h1>
      <div class="login__email">
        <input v-model="email" type="text" placeholder="Телефон, имя пользователя или эл.адрес">
      </div>
      <div class="login__password">
        <input type="password" v-model="password" id="password-input" placeholder="Введите пароль" name="password">

      </div>
      <div class="login__btn">
        <button v-on:click="login">Войти</button>
      </div>
      <div v-if="isLoading">
        <q-spinner
        color="primary"
        size="3em"
      />
      </div>
      <div class="twoLineDiv">
        <div class="lineFirst"></div>
        <div class="lineText">ИЛИ</div>
        <div class="lineSecond"></div>
      </div>
      <div class="facebookIconAndText">
        <div class="icon">
          <img src="../assets/iconFacebook.ico" alt="">
        </div>
        <div class="facebookIconAndText-text">
          Войти через Facebook
        </div>
      </div>
      <div class="passwordText">
        Забыли пароль?
      </div>
    </div>

    <div class="accountRegister">
      У вас ещё нет аккаунта?
      <router-link to="/auth/registration" class="accountRegister__link">
        Зарегистрироваться
      </router-link>
    </div>
    <div class="ots2"></div>
    <div class="app-installationSec">
      <p>Установите приложение.</p>
      <div class="app-installation__icons">
        <a :href="googleLink">
          <img src="../assets/google.png" alt="">
        </a>
        <a :href="iosLink">
          <img src="../assets/ios.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>


<script>
  import {defineComponent} from 'vue'
  import axios from 'axios'

  export default defineComponent({
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        isLoading: false
      }
    },
    props: ['loginSuccess'],
    methods: {
      login() {
        this.isLoading = true
        axios({
          method: 'post',
          url: 'https://simp-o-gram.herokuapp.com/auth/login',
          headers: {
            'api-token': '8e4b2ed13bfbf65e54561bc45e65f388636041b4b33ea6c89072dbdd45fd9272'
          },
          data: {
            "username": this.email,
            "password": this.password
          }
        }).then((result) => {
          console.log('Login Success', result)
          this.$emit('loginSuccess', true)
        }).catch((error) => {
            console.log(error)
          })
        .finally(() => {
          this.isLoading = false
        })
      },

    },
    mounted() {
      //console.log(this.props[0])
    }

  })
</script>


<style>

</style>
