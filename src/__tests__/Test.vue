<template>
  <div>
    <button @click="count++">Add up</button>
    <p>Total clicks: {{ count }}</p>
  </div> 
</template>
<script lang="ts">
export const Counter = {
  data () {
    return { count: 0, }
  },
}
</script>