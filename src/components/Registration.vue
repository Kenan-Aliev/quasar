<template>

  <div class="registration">
    <div v-if="step ===`registration`" class="registration-wrapper">
      <div class="genRegistration">
        <div class="registration">
          <h1 class="registration__title-logo">Instagram</h1>
          <p class="registration__title">Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</p>
          <div class="registration__btn">
            <button>Войти через Facebook</button>
          </div>
          <div class="registration__lines">
            <div class="registration__right-line"></div>
            <div class="registration__line-text">ИЛИ</div>
            <div class="registration__right-line"></div>
          </div>

          <div class="registration__input"
               v-for="(inp, ind) in registerInputs" :key="ind">
<!--            {{ userInputsModel[inp.userModel]}}-->
            <input type="text"
                   :placeholder="inp.placeholder"
                   v-model="userInputsModel[inp.userModel]">
         <div v-for="(error,idx) in fieldError[inp.userModel]" :key="idx">
           {{error}}
         </div>
          </div>
          <div class="registration__btn">
            <button v-on:click="register">Регистрация</button>
          </div>
          <p class="registration__privacy">Регистрируясь, вы принимаете наши <b>Условия, Политику использования данных и
            Политику в отношении файлов cookie.</b></p>
        </div>
      </div>

      <div class="account-login">
        <span>Есть аккаунт?</span>
        <router-link to="/auth" class="account-login-link">Вход</router-link>
      </div>
      <div class="app-installation">
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
    <div v-if="step === `birthday`">
      <BirthdayComponent/>
    </div>
  </div>

</template>


<script>
  import {defineComponent} from 'vue'
  import BirthdayComponent from "../components/birthdayComponent";
  import validate from 'validate.js';
  import validateModels from '../utils/index'
  import axios from 'axios'

  export default defineComponent({
    name: 'RegistrationComponent',
    components: {BirthdayComponent},
    data() {
      return {
        userInputsModel: {
          userLogin: '',
          FIO: '',
          name: '',
          password: ''
        },
        registerValidateModel: {
          userLogin: validateModels.userLogin,
          FIO:validateModels.FIO,
          name: validateModels.name,
          password:validateModels.password
        },
        registerInputs: [
          {
            placeholder: 'Моб. телефон или эл. адрес',
            userModel: 'userLogin'
          },

          {
            placeholder: 'Имя и фамилия',
            userModel: 'FIO'
          },
          {
            placeholder: 'Имя пользователя',
            userModel: 'name'
          },
          {
            placeholder: 'Пароль',
            userModel: 'password'
          }
        ],
        googleLink: 'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=D130597B-4B2B-40C0-B026-E20D31930EF1&utm_content=lo&utm_medium=badge',
        iosLink: 'https://apps.apple.com/app/instagram/id389801252?vt=lo',
        step: 'registration',
        fieldError:{}
      }
    },
    methods: {
      register () {
        const modelInputs = {
          userLogin: this.userInputsModel.userLogin,
          FIO:this.userInputsModel.FIO,
          name: this.userInputsModel.name,
          password:this.userInputsModel.password
        }
        if (validate(modelInputs, this.registerValidateModel)){
          this.fieldError = validate(
            modelInputs,
            this.registerValidateModel,
            {fullMessages: false}
          )
        }
        else{
          axios({
            method: 'post',
            url: 'https://simp-o-gram.herokuapp.com/auth/register',
            headers: {
              'api-token': '8e4b2ed13bfbf65e54561bc45e65f388636041b4b33ea6c89072dbdd45fd9272'
            },
            data: {
              "username": this.userInputsModel.userLogin,
              "password": this.userInputsModel.password,
              "firstname": this.userInputsModel.FIO,
              "lastname": "",
              "email":this.userInputsModel.userLogin,
            }
          }).then(() => {
            this.step = 'birthday'
          }).catch((error) => {
            console.log('REGISTRATION ERROR', error)
          })
          // localStorage.setItem('userLogin', this.userInputsModel.userLogin)
          // localStorage.setItem('FIO', this.userInputsModel.FIO)
          // localStorage.setItem('name', this.userInputsModel.name)
          // localStorage.setItem('password', this.userInputsModel.password)
        }
      },
      getStorageData () {
        const userLogin = localStorage.getItem('userLogin');
        const FIO = localStorage.getItem('FIO');
        const name = localStorage.getItem('name');
        const password = localStorage.getItem('password');
        if (userLogin && FIO && name && password){
          this.userInputsModel.userLogin = userLogin
          this.userInputsModel.FIO = FIO
          this.userInputsModel.name = name
          this.userInputsModel.password = password
        }
      }
    },
    mounted() {
      //this.getStorageData()
    }
  })
</script>


<style>

</style>
