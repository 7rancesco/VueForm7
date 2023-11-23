<script setup lang="ts">
    const prop = defineProps<{
        inputValue?: string,
        inputObject?: Object
    }>()
</script>
<template>
    <input :value="inputValue" />
</template>
<style scoped>

</style>