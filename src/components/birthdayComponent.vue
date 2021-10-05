<template>

  <div v-if="step === 'birthday'" class="body">
    <div class="smartPic">
      <img class="pic1" src="../assets/smart.png" alt="">

    </div>
    <div class="fonPic">
<!--      <img class="pic2" src="../assets/fon.jpg" alt="">-->
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
          <q-carousel-slide :name="2" img-src="https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg" />
          <q-carousel-slide :name="3" img-src="https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg" />
          <q-carousel-slide :name="4" img-src="https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg" />
          <q-carousel-slide :name="5" img-src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" />
        </q-carousel>
      </div>
    </div>
    <div class="complete">
    <div class="general">
      <div class="picture">
        <img src="../assets/tort.jpeg" alt="">
      </div>
      <div class="title">
        <div class="title__1">
          Укажите дату вашего рождения
        </div>
        <div class="title__2">
          Эта информация не будет показываться в вашем общедоступном профиле.
        </div>
        <div class="title__3">
          Почему нужно указывать дату рождения?
        </div>
      </div>
      <div class="date">
        <span class="inp1"><q-select   borderless v-model="modelM" :options="optionsM" label="Месяц"/></span>
        <span class="inp2"><q-select  borderless v-model="modelD" :options="optionsD" label="День"/></span>
        <span class="inp3"><q-select  borderless v-model="modelY" :options="optionsY" label="Год"/></span>
      </div>
      <div class="titleBottom">
        <div class="titleBottom__1">
          Требуется ввести дату вашего рождения
        </div>
        <div class="titleBottom__2">
          Укажите собственный день рождения, даже если вы создаете этот аккаунт для компании, домашнего животного и пр.
        </div>
      </div>
      <div class="login__btn">
        <button @click ="changeComponent()">Далее</button>
      </div>
      <div class="backBtn">
        <router-link to="/auth" class="backBtn">Назад</router-link>
      </div>
    </div>
    <div class="ots"></div>
    <div class="account-loginmy">
      <span>Есть аккаунт?</span>
      <router-link to="/auth" class="account-loginmy-link">Вход</router-link>
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
  </div>
  <div v-if="step === 'confirm'">
    <confirmPhoneNumber/>
  </div>





</template>

<script>
import {defineComponent} from 'vue'
import { ref } from 'vue'
import confirmPhoneNumber from "../components/ConfirmPhoneNumber";


export default defineComponent({
  name: 'birthdayComponent',
  components: {confirmPhoneNumber},
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true),
      modelM: ref(null),
      modelD: ref(null),
      modelY: ref(null),
      optionsM: [
        'январь', 'февраль', 'март', 'апрель', 'май',`июнь`, `июль`, `август`, `сентябрь`, `октябрь`, `ноябрь`, `декабрь`
      ],
      optionsD: [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
      ],
      optionsY: [
        1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2013,2014,2015,2016,2017,2018,2019,2020,2021
      ]
    }

  },
  data() {
    return {
      step: 'birthday'
    }
  },
  methods: {
    changeComponent() {
      this.step = 'confirm'
    }
  }


})
// export default {
//   name: "birthdayComponent"
// }
</script>

<style scoped>

</style>
