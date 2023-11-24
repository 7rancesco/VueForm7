<script setup lang="ts">
    import {type Collection} from '../Form';
    import FormRoot from '../FormRoot';

    const prop = defineProps<{component: Collection}>()

</script>
<template>
    <div v-for="form, i in component.value">
        <button @click="component.value.splice(Number(i),1)">x</button>
        <div v-for="formComponent, k in form">
            <component v-if="(typeof formComponent?.component == 'string')" :is="FormRoot[formComponent.component]" 
                :component="formComponent"
            />
        </div>
    </div>
    <button @click="component.value.push(JSON.parse(JSON.stringify(prop.component.components)))">Add</button>
</template>
<style scoped>

</style>