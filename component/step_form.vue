<script setup lang="ts">
    import {type StepForm} from '../Form';
    import FormRoot from '../FormRoot';
    import { ref } from 'vue';
    const prop = defineProps<{component: StepForm}>()
    const step = ref(prop.component.value);

</script>
<template>
    <div v-if="!component.hidden">
        <div v-for="formComponent, k in component.components[step]">
            <component v-if="(typeof formComponent?.component == 'string')" :is="FormRoot[formComponent.component]" 
                :component="formComponent"
            />
        </div>

        <button v-if="step !== 0" @click="step--;">Prev</button>
        <button v-if="step !== component.components.length - 1" @click="step++;">Next</button>
    </div>
</template>
<style scoped>

</style>