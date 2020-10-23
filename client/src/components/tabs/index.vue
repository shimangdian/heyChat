<template>
  <div class="tabs">
    <div class="tab-pages"><slot /></div>
    <div class="tab-items">
      <div class="item" :class="{'active': item.value === active}" v-for="item in tabs" :key='item.value'>
        <span class="icon" v-if='item.icon'></span>
        <span class='text'>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import {defineComponent, PropType} from 'vue'

interface TabsI {
  value: string|number,
  text: string,
  activeText?: string,
  icon?: string
}

export default defineComponent({
  props: {
    tabs: Object as PropType<TabsI>
  }
})
</script>
<style lang='less'>
.tabs{
  height: 100%;
  display: flex;
  flex-direction: column;
  .tab-pages{
    flex: 1;
  }
  .tab-items{
    flex-shrink: 0;
    height: 50px;
    border-top: 1px solid #aaa;
  }
}
</style>