<template>
  <div class='app'>
    <tabs tabs="[{value: '1', text: '最近聊天'}, {value: '1', text: '好友列表'}]"/>
    <router-view>
    </router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import tabs from '@/components/tabs/index.vue'
export default defineComponent({
  components: {
    tabs
  },
})
</script>

<style lang="less">
@import '@/styles/common.less';
.app{
  height: 100%;
}
</style>
