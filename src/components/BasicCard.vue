<template>
  <div class="card hoverable" :class="customClass" >
    <div class="card-content">
      <span class="card-title">{{title}}</span>
      <p>{{content}}</p>
    </div>
    <div class="card-action">
      <a :href="link1" class="m-link1 blue-text">{{link1Title}}</a>
      <a :href="link2" class="m-link2 blue-text">{{link2Title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    customClass: {
      default: 'animated fadeInDown'
    },
    title: {
      default: 'Title'
    },
    content: {
      default: 'Content'
    },
    link1: {
      default: '#'
    },
    link1Title: {
      default: 'link1Title'
    },
    link2: {
      default: '#'
    },
    link2Title: {
      default: 'link2Title'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
