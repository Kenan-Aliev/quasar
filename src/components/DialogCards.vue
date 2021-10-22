<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Post Info</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <p>
        <b>id</b>
        <br>
        {{someObj.id}}
      </p>
      <p>
        <b>user id</b>
        <br>{{someObj.userId}}
      </p>
      <p>
        <b>title</b>
        <br>
        {{someObj.title}}
      </p>
    </q-card-section>

    <q-card-actions align="right">
      <slot name="example"></slot>
      <q-btn flat label="CLOSE" color="primary" @click="closeDialog" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "DialogCards",
  props:{
    message: {
      type: String,
      default: 'Default title'
    },
    someObj: {
      type: Object,
      default: () => {}
    },
    someArray: {
      type: Array,
      default: () => {}
    },
    someFunction: {
      type: Function,
      default: () => {}
    },
    someNumber: {
      type: Number,
      default: 0
    },
    someBoolean: {
      type: Boolean,
      default: false
    },
    postInd: {
      type: Number,
      default: 0
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeModalDialog', false)
      this.$emit('getConsole', 'this message from child component')
    }
  }
}
</script>

<style scoped>

</style>
