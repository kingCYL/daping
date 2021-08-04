<template>
  <div class="sr-block" :style="{width: width, height: height}">
    <div class="title" v-if="titleName">{{titleName}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'srBlock',
  props: {
    titleName: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '280px'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .sr-block {
    background-color: #191934;
    border-radius: 15px;
    padding: 15px 0;
    box-sizing: border-box;
    .title {
      text-align: left;
      font-size: 14px;
      color: #eae4e4;
      padding-left: 15px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 4px;
        height: 14px;
        transform: translateY(-50%);
        background-color: #8f00ff;
      }
    }
  }
</style>>