<template>
  <div class="main">
    <div class="main__header">
      <h1 class="main__header-title">Instagram</h1>
      <div class="main__header-input">
        <input type="text" placeholder="Поиск">
        <div class="searchIcon">
          <img src="../assets/search.png" alt="">
        </div>
      </div>
      <div class="main__header-icons">
        <div class="header__icons-item">
          <img src="../assets/home.png" alt="">
        </div>
        <div class="header__icons-item">
          <img src="../assets/messenger.png" alt="">
        </div>
        <div class="header__icons-item">
          <img src="../assets/compas.png" alt="">
        </div>
        <div class="header__icons-item">
          <img src="../assets/like.png" alt="">
        </div>
        <div class="header__avatar">
          <img src="../assets/profile.png" alt="">
        </div>
      </div>
    </div>
    <div class="main__line">

    </div>
  </div>
</template>


<script>
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'Main'
  })


</script>
