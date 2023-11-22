<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const prop = defineProps<{
        inputValue?: string
    }>()

    const emit = defineEmits(['inputValue']);

    const setFocus = () => {
        const element = document.querySelectorAll('.textInput')[0] as HTMLInputElement;
        if(element)
        {
            element.focus();
            
            //Set cursor on the end of text value
            const range = document.createRange();
            range.selectNodeContents(element);
            range.collapse(false);
            const selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    }

    onMounted(() => {
        setFocus();
    })

    const name = ref<string>(prop.inputValue ? prop.inputValue : '');
    const setName = (e : KeyboardEvent) => {
        const target = e.target as HTMLElement;
        if (target) {
            const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
            const test = regex.test(target.innerText);
            if(target.innerText)
            {
                if(test)
                {
                    name.value = target.innerText.replace(/(?:^|\s)(\w)/g, (match, letter) => (match.includes(" ") ? " " : "") + letter.toUpperCase());
                }
                else
                {
                    target.innerText = name.value;
                }
            }
            else
            {
                name.value = '';
            }

        }
        setTimeout(() => {
            setFocus();
        }, 1);
        
        emit('inputValue', name.value)
    }

</script>

<template>

    <div 
        class="textInput"
        contenteditable
        @keyup="setName($event)"
    >
        {{ name }}
    </div>

</template>

<style scoped>

    .textInput
    {
        height: auto;
        display: flex;
        align-items: center;
        padding: 6px;
        margin-top: 5px;
        background: rgb(255, 255, 255);
        border: none;
        border-radius: 5px;
        font-size: 1rem;
    }

</style>
