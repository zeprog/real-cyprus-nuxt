<template>
  <div class="useful__button" @click="updateLabel" >
    <input type="radio" name="button" :id="value" :value="value">
    <label :for="value" class="useful__button-label" :class="{active: activeButton == value}">{{ title }}</label>
</div>
</template>

<script>
export default {
  props: ['value', 'title', 'activeButton'],
  methods: {
    updateLabel() {
      this.$emit('onUpdateLabel', this.value)
    }
  }
}
</script>

<style scoped>
.active {
    background-color: #2051FF !important;
}
</style>