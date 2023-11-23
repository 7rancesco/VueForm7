<script setup lang="ts">
    const prop = defineProps<{
        inputValue?: string,
        inputObject?: Object
    }>()
</script>
<template>
    {{inputValue}}
</template>
<style scoped>

</style>