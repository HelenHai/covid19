<template>
  <div>News</div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  name: "index",
  data() {
    return{}
  },
  setup() {
    const router = useRouter()
    const route = useRoute()

    const toNewsPage = () => {
      router.push({
        name: 'news'
      })
    }

    return { toNewsPage }
  }
}
</script>

<style scoped>

</style>