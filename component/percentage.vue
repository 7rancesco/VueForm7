<script setup lang="ts">
    const prop = defineProps<{
        inputValue?: number,
        inputObject?: Object
    }>()
</script>
<template>
    {{inputValue}}
</template>
<style scoped>

</style>