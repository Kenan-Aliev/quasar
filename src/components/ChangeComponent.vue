<template>
  <div v-if="step ==='change'" class="confirm">
    <div  class="body">
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
        <div class="generalConfirmDiv">
          <div class="phoneDiv">
            <img class="phoneImg" src="../assets/phone1.png" alt="">
          </div>
          <div class="title">
            <div class="title__oneStep">
              Изменение номера телефона
            </div>
            <div class="title__6thCode">
              Текущий номер телефона:
            </div>
            <div class="title__telNumber">
              +996702454585
            </div>

          </div>
          <div class="input6thDiv">
            <input class="input6th" placeholder="Новый номер телефона" type="text">
          </div>

          <div class="btnChange">
            <button >Изменить</button>
          </div>
          <div class="btnChangeInquiry">
            <router-link to="" v-on:click:="backToConfirm" class="routerChange">Назад</router-link>

          </div>
        </div>
        <div class="otsConfirmDiv"></div>
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






  </div>
  <div v-if="step === 'confirm'">
    <ConfirmPhoneNumber/>
  </div>



</template>

<script>
import {defineComponent} from 'vue'
import {ref} from 'vue'
import ConfirmPhoneNumber from "../components/ConfirmPhoneNumber";
export default defineComponent( {
  name: "ChangeComponent",
    // components: {ConfirmPhoneNumber},
  data() {
    return {
      step: 'change'
    }
  },
    methods: {
      backToConfirm() {
        this.step = 'confirm'
      }
    },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      modelM: ref(null),
      modelD: ref(null),
      modelY: ref(null),
    }
  }
}
)
</script>

<style scoped>

</style>
