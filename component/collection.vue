<script setup lang="ts">
    import type components from '@/components/VueForm/FormRoute';
import FormRoot from '../FormRoot';
    import { ref } from 'vue';

    const prop = defineProps<{
        inputValue?: string,
        inputObject?: Object
    }>()

    const forms = ref<{[key: number] : Object | undefined}>({ 0: prop.inputObject});

    const form = JSON.parse(JSON.stringify(prop.inputObject));

    const add = (n : number) => {
        forms.value[n] = form;
    }

    const remove = (n : number) => {
        forms.value[n] = undefined
    }

</script>
<template>

    <div v-for="form, i in forms">

        <div v-if="form !== undefined">
            **********************
        </div>

        <div v-for="components in form">
            <component v-if="(typeof components?.component == 'string')" :is="FormRoot[components.component]" 
                :inputValue="components?.value"
                :inputObject="components?.object"
            />

        </div>
        <div v-if="form">
            <button @click="remove(Number(i))">del</button>
            <button @click="add(Number(i) + 1)" v-if="Object.keys(forms).length - 1 == Number(i)">add v</button>
        </div>


    </div>
</template>
<style scoped>

</style>