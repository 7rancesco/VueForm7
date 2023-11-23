<script setup lang="ts">
    import FormRoot from './FormRoot';
    import FormComponents from './Form';

    defineProps({
        id: Number
    })
    
</script>
<template>

    <div v-for="form, n in FormComponents">

        <div v-for="formComponent in form" v-if="n == id">

            <div v-for="component in formComponent">
                <component v-if="(typeof component?.component == 'string')" :is="FormRoot[component.component]" 
                    :inputValue="component?.value"
                    :inputObject="component?.components"
                />
            </div>

        </div>
    </div>

</template>
<style scoped>

</style>