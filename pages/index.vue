<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        PancakeSwap Farms Stake Balance Viewer
      </h1>
      <ul class="stakes">
      <br><h3>Place your wallet address here:</h3><br>
      <input v-model="wallet" placeholder="wallet address">
      <p>Wallet is: {{ wallet }}</p>
        <br><h3>and...</h3><br>
          <nuxt-link :to="{ name: 'stakes-id', params: { id: 0, wallet: wallet}}">
            Show the balances!
          </nuxt-link>
      </ul>
      <nuxt-link class="button" to="/">
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const data = await $http.$get('/api/farms')
    return { farms: data, wallet: '' }
  },
  head () {
    return {
      title: 'Farms'
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
.stakes
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.stake
{
  margin: 10px 0;
}
.button
{
  display: inline-block;
  margin-top: 50px;
}
</style>
