<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        Wallets :D
      </h1>
      <h2 class="stakes">
        Hey:
        {{ wallets }}
      </h2>
      <nuxt-link class="button" to="/">
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const wallets = await $http.$get('/api/wallets')
    return { wallets }
  },
  head () {
    return {
      title: 'Wallets'
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
.button
{
  display: inline-block;
  margin-top: 50px;
}
</style>
