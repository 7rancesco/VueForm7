<script setup lang="ts">
    import FormRoot from '../FormRoot';
    import { ref } from 'vue';

    const prop = defineProps<{
        inputValue?: string,
        inputObject?: Object
    }>()

    const forms = ref<{[key: number] : Object | undefined}>({ 0: prop.inputObject});

    const form = JSON.parse(JSON.stringify(prop.inputObject));

    const formIndex = ref({
        first: 0,
        last: 0,
        lenght: 1
    });

    const setFormIndex = () => {
        const keys = Object.keys(forms.value);

        const filterUndefined : number[] = [];
        keys.forEach(n => {
            if(forms.value[Number(n)] !== undefined)
            {
                filterUndefined.push(Number(n))
            }
        });

        formIndex.value = {
            first: filterUndefined[0],
            last: filterUndefined[filterUndefined.length - 1],
            lenght: filterUndefined.length
        }

    }

    const add = (n : number) => {
        forms.value[n] = form;
        setFormIndex();
    }

    const remove = (n : number) => {
        forms.value[n] = undefined;
        setFormIndex();
    }

</script>
<template>

    <div v-for="form, i in forms">
        <div v-if="form !== undefined">
            <button v-if="formIndex.lenght > 1" @click="remove(Number(i))">del</button>
        </div>

        <div v-for="components in form">
            <component v-if="(typeof components?.component == 'string')" :is="FormRoot[components.component]" 
                :inputValue="components?.value"
                :inputObject="components?.object"
            />

        </div>
        <div v-if="form">
            <button v-if="formIndex.last == Number(i)" @click="add(Number(i) + 1)">add v</button>
        </div>


    </div>
</template>
<style scoped>

</style>