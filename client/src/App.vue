<template>
  <div class="hey-chat">
    <Tabs />
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Tabs  from './components/tabs/index'
export default {
  name: 'App',
  component: {
    Tabs
  },
  mounted () {
    console.log(Tabs);
  }
}

</script>

<style lang='less'>
@import './styles/common.less';
</style>
