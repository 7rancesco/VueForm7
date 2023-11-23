<script setup lang="ts">
    
    import FormBuilder from './FormBuilder.vue'

    defineProps({
        id: Number
    })
    
</script>

<template>
    <h1>VForm</h1>
    <FormBuilder :id="id"/>
</template>

<style scoped>

</style>
