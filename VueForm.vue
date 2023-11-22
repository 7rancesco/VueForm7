<script setup lang="ts">
    import { ref, shallowRef, type DefineComponent } from 'vue';
    import components from './FormRoute';

    interface Input {
        label: string,
        value: string,
        type: 'name' | 'codice_fiscale',
        width?: number,
        placeholder?: string
    }

    interface InputEdit extends Input {
        edit?: boolean
    }

    const inputsSchema = ref<{[key : string] : Input}>(
        {
            'Nome' : {
                label: 'Nome',
                value: '',
                type: 'name',
                placeholder: 'Mario'
            },
            'Cognome' : {
                label: 'Cognome',
                value: '',
                type: 'name',
                placeholder: 'Rossi',
                width: 1,
            },
            'CF' : {
                label: 'Codice fiscale',
                value: '',
                type: 'codice_fiscale',
                width: 2.1,
                placeholder: 'AAAAAA99A99A999A'
            }
        }
    );

    const formSchema = ref<{[key : string] : InputEdit}>(
        inputsSchema.value
    );

    formSchema.value[Object.keys(formSchema.value)[0]].edit = true;

    const InputKeys = Object.keys(formSchema.value);

    const setInputEdit = (input : string) => {
        InputKeys.forEach(key => {
            key === input ? 
            formSchema.value[key].edit = true 
            : 
            formSchema.value[key].edit = false;
        });
    }

    const component = shallowRef(components['name']);

    window.onclick = function(e) {
        if(e.target)
        {
            const t = e.target as HTMLElement;
            if(!t.classList.contains('form-value'))
            setInputEdit('');
        }
    }

    const setComponent = (componentName : string) => {
        if(componentName)
        component.value = components[componentName];
    }

</script>

<template>

    <div class="form-container">
        <div class="form-component" 
            v-for="input, name in formSchema" 
            :style="`width:${input.width ? input.width * 280 : 280}px;`"
        >

            <div class="form-label">
                {{ input.label }}
            </div>

            <div v-if="input.edit">
                {{ setComponent(input.type) }}
                <component :inputValue="input.value" @inputValue="(v : string) => input.value = v" />
            </div>
            <div v-else class="form-value"
                @click="setInputEdit(name.toString())"
                :class="input.value ? null : 'placeholder'"
            >
                {{ 
                    input.value ? 
                    input.value :
                    input.placeholder ? 
                    input.placeholder :
                    ''
                }}
            </div>

        </div>
    </div>

</template>

<style scoped>

    .form-container
    {
        display: flex;
        flex-wrap: wrap;
        column-gap: 15px;
        row-gap: 15px;
        padding: 15px;
        justify-content: center;
        align-items: start;
        max-width: 1400px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        background: rgba(0, 145, 255, 0.049);
    }
    
    .form-component
    {
        height: auto;
        padding: 5px;
        border-radius: 5px;
        overflow: hidden;
        background: rgba(201, 225, 255, 0.279);
    }

    .form-label
    {
        height: auto;
        padding: 3px;
        color: rgba(18, 58, 118, 0.691);
    }

    .form-value
    {
        height: auto;
        display: flex;
        align-items: center;
        padding: 6px;
        margin-top: 5px;
        border: solid 1px rgba(18, 58, 118, 0.118);
        border-radius: 5px;
        font-size: 0.9rem;
        color: rgb(10, 10, 129);
        background: rgba(255, 255, 255, 0.51);
    }

    .placeholder
    {
        color: rgba(34, 87, 136, 0.413);
        background: rgba(255, 255, 255, 0.259);
    }

</style>
