<template>
  <div class="loginPage">
    <div class="login">
      <h1 class="login__title">Instagram</h1>
      <div class="login__email">
        <input type="text" placeholder="Телефон, имя пользователя или эл.адрес">
      </div>
      <div class="login__password">
        <input type="password" id="password-input" placeholder="Введите пароль" name="password">

      </div>
      <div class="login__btn">
        <button>Войти</button>
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

  export default defineComponent({
    name: 'Login'

  })
</script>


<style>

</style>
