<script setup lang="ts">
    import {type Name} from '../Form';

    const prop = defineProps<{component: Name}>()

</script>
<template>
    <div v-if="!component.hidden">
        <label>{{ component.label }}</label>
        <input v-model="component.value" @keyup="component.onKeyup">
    </div>
</template>
<style scoped>

</style>