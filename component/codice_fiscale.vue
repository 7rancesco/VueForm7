<script setup lang="ts">
    import {type CodiceFiscale} from '../Form';

    const prop = defineProps<{component: CodiceFiscale}>()

</script>
<template>
    <label>{{ component.label }}</label>
    <input v-model="component.value">
</template>
<style scoped>

</style>