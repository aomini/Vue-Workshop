<template>
  <input
    class="form-control "
    :type="type"
    :placeholder="placeholder"
    v-model="inputValue"
    @keyup="handleKeyup"
  />
</template>
<script>
export default {
    props: ['type', 'placeholder', 'model'],
    data(){
      return {
        inputValue : '' 
      }
    },
    methods : {
      handleKeyup(){
        this.$emit('on-handle-keyup', this.inputValue);
      }
    }
}
</script>

<style scoped>
input{
    outline: none;
}
</style>