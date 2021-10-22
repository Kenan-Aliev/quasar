<template>
<div>
  <h2>Props & emit</h2>
  <input type="text" v-model="inputModel">
  <p style="color: #8e8e8e; font-size: 12px">
    {{textType}}
  </p>
  <div v-for="(post, ind) in posts" :key="ind" class="q-pa-md" style="width:20%; cursor: pointer" @click="openDialog(ind)">
      {{post.title}}
  </div>
  <q-dialog v-model="isDialog">
    <DialogCards
      :some-obj="posts[postInd]"
      :post-ind="postInd"
      @closeModalDialog="closeModal"
      @getConsole="showConLog"
    >
      <template v-slot:example>
        <q-btn v-if="postInd === 2" @click="test" flat label="VIP" color="primary" />
      </template>

    </DialogCards>
  </q-dialog>
</div>
</template>

<script>
import DialogCards from "components/DialogCards";
import axios from 'axios'
import dialog from "src/mixins/dialog";

export default {
  name: "Example",
  components: {DialogCards},
  mixins: [dialog],
  data () {
    return {
      isDialog: false,
      text: 'EXAMPLE !!!',
      posts: [],
      postInd: null,
      inputModel: '',
      textType: '',
      obj: {
        name: 'Aidai',
        city: 'Bishkek'
      }
    }
  },
  methods: {
    test () {
      console.log('TEST')
    },
    openDialog (ind) {
      console.log('REFS', this.$refs)
      this.isDialog = true
      this.postInd = ind
    },
    someMethod () {
      console.log('METHOD FROM PARENT COMPONENT')
    },
    closeModal (valueFromEmit) {
      this.isDialog = valueFromEmit
    },
    showConLog (text) {
      console.log(text)
    }
  },
  created() {
    // console.log('NOT MIXIN')
    axios('https://jsonplaceholder.typicode.com/posts')
      .then((response) =>{
        this.posts = response.data
      })
      .catch(error => console.log(error))
  },
  watch: {
    inputModel (newValue, oldValue) {
      if (newValue){
        this.textType = 'Write...'
        setTimeout(()=>{
          this.textType = ''
        },1200)
      }
    }
  }
}
</script>

<style scoped>

</style>
