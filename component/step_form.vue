<script setup lang="ts">
    import { ref } from 'vue';
    import FormRoot from '../FormRoot';

    const prop = defineProps<{
        inputValue?: string,
        inputObject?: Object
    }>()

    const steps = ref(prop.inputObject as Object[]);

    const stepIndex = ref(0);

</script>
<template>
        <div v-for="components in steps[stepIndex]">
            <component v-if="(typeof components?.component == 'string')" :is="FormRoot[components.component]" 
                :inputValue="components?.value"
                :inputObject="components?.object"
            />
        </div>
        <button v-if="stepIndex !== 0" @click="stepIndex--">Prev</button>
        <button v-if="stepIndex !== steps.length - 1" @click="stepIndex++">Next</button>
</template>
<style scoped>

</style>