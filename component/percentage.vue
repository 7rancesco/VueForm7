<script setup lang="ts">
    import {type Percentage} from '../Form';

    const prop = defineProps<{component: Percentage}>()

</script>
<template>
    <div v-if="!component.hidden">
        <label>{{ component.label }}</label>
        <input v-model="component.value" @keyup="component.onKeyup">
    </div>        
</template>
<style scoped>

</style>