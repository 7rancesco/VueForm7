<script setup lang="ts">
    import {type Name} from '../Form';

    const prop = defineProps<{component: Name}>()

</script>
<template>
    <label>{{ component.label }}</label>
    <input v-model="component.value">
</template>
<style scoped>

</style>