<script setup lang="ts">
    import FormRoot from './FormRoot';
    import {FormComponents} from './Form';

    defineProps({
        id: Number
    })
    
</script>
<template>
    <div v-if="FormComponents && id" v-for="formComponent, k in FormComponents[id]">
        <component v-if="(typeof formComponent?.component == 'string')" :is="FormRoot[formComponent.component]" 
            :component="formComponent"
        />
    </div>

</template>
<style scoped>

</style>