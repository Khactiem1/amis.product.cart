<template>
  <div>
    {{ show }}
  </div>
</template>

<script>
import {defineComponent, computed, watch} from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: () => false 
    }
  },
  setup(props, context){
    const { show } = toRefs(props);
    const dataComputed = computed(() => !show.value);
    watch(show, (newValue, oldValue) => {
      
    });

    return{
      dataComputed,
    }
  }
})

</script>

<style>

</style>