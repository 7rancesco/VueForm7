<script setup lang="ts">
    import {type Percentage} from '../Form';

    const prop = defineProps<{component: Percentage}>()

</script>
<template>
    <label>{{ component.label }}</label>
    <input v-model="component.value">
</template>
<style scoped>

</style>