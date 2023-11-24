<script setup lang="ts">
    import {type CodiceFiscale} from '../Form';

    const prop = defineProps<{component: CodiceFiscale}>()

</script>
<template>
    <div v-if="!component.hidden">
        <label>{{ component.label }}</label>
        <input v-model="component.value" @keyup="component.onKeyup">
    </div>
</template>
<style scoped>

</style>