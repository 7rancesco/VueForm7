<script setup lang="ts">
    import { ref } from 'vue';
    const prop = defineProps<{
        inputValue?: string,
        inputObject?: Object
    }>()
    const val = ref(prop.inputValue);
</script>
<template>
    <input v-model="val" />
</template>
<style scoped>

</style>