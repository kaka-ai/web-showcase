<template>
  <div class="m-home row">
    <div class="col s4" v-for="(item, index) in projects" :key="index">
      <BasicCard
        :title="item.title"
        :content="item.content"
        :link1="item.link1"
        :link1Title="item.link1Title"
        :link2="item.link2"
        :link2Title="item.link2Title" />
    </div>
  </div>
</template>

<script>
import BasicCard from '@/components/BasicCard'
export default {
  components: {
    BasicCard
  },
  name: 'HomePage',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('project/getProjects')
  },
  computed: {
    projects () {
      return this.$store.getters['project/getProjects']
    }
  }
}
</script>

<style scoped>

</style>
