<template>
<div>LIFE</div>
</template>

<script>
export default {
  name: "lifeCycle",
  data() {
    return {
      text: 'TEXT'
    }
  },
  beforeCreate() {
    console.log('beforeCreate1', this.text,this.$el)
  },
  created() {
    console.log('created', this.text,this.$el)
  },
  beforeMount() {
    console.log('beforeMount', this.text, this.$el)
  },
  mounted() {
    console.log('mounted11', this.text, this.$el)
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeUnmount() {
  },
  unmounted() {
    console.log('unmounted')
  },
}
</script>

<style scoped>

</style>
