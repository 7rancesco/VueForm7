<script setup lang="ts">
    
    import FormBuilder from './FormBuilder.vue'

    defineProps({
        id: Number
    })
    
</script>

<template>
    <FormBuilder :id="id"/>
</template>

<style scoped>

</style>
