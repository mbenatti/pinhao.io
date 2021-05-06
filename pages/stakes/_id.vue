<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        Stake Balance
      </h1>
      <h2 class="info">
        Farm: {{ farm }}
      </h2>
      <h2 class="info">
        Wallet: {{ wallet }}
      </h2>
      <h2 class="title">
        Your balance: {{ data.balance }}
      </h2>
      <nuxt-link class="button" to="/">
        Back
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ params, error, $http }) {
    return await $http.$get('/api/stakes/' + params.pid + '/' + params.wallet).then((res) => {
      return { data: res, wallet: params.wallet, farm: params.farm }
    })
      .catch((e) => {
        error({ statusCode: 404, message: 'Error fetching data, verify your wallet' })
      })
  },
  head () {
    return {
      title: `Stake: ${this.farm}`
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
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
