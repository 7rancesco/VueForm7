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

    const testRegex = ref<boolean>();
    const testCurrentCF = (cf : string) => {
        const regexCF = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
        const testCF = regexCF.test(cf); 

        if(testCF){
            testRegex.value = true;
        }
        else
        {
            testRegex.value = false;
        }
        return testCF
    }

    onMounted(() => {
        setFocus();
        testCurrentCF(prop.inputValue ? prop.inputValue : name.value);
        console.log('*');
        
    })

    const name = ref<string>(prop.inputValue ? prop.inputValue : '');
    const setName = (e : KeyboardEvent) => {
        const target = e.target as HTMLElement;
        if (target) {
            const regex = /^[a-zA-Z0-9\s]+$/;
            const test = regex.test(target.innerText);
            const cf = target.innerText.replace(/\w/g, letter => letter.toUpperCase());       
            if(target.innerText)
            {
                if(test)
                {
                    name.value = cf;
                }
                else
                {
                    target.innerText = name.value;
                }
                testCurrentCF(cf)
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
        :class="!testRegex ? 'testKO' : null"
    >
        {{ name }}
    </div>
    <div v-if="!testRegex">
        <p class="help_heading">Il codice fiscale deve essere composto da:</p>
        <div class="help_message">
            <ul>
                <li>
                    6 lettere
                </li>
                <li>
                    2 numeri
                </li>
            </ul>
            <ul>
                <li>
                    1 lettera
                </li>
                <li>
                    2 numeri
                </li>
            </ul>
            <ul>
                <li>
                    1 lettera
                </li>
                <li>
                    3 numeri
                </li>
            </ul>
            <ul>
                <li>
                    1 lettera
                </li>
            </ul>
        </div>
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
        background: rgba(0, 128, 0, 0.339);
        border: none;
        border-radius: 5px;
        font-size: 1rem;
    }

    .testKO
    {
        background: rgba(255, 0, 0, 0.37);
    }

    .help_heading{
        font-size: 0.9rem;
        text-align: center;
    }
    .help_message
    {
        display: flex;
        justify-content: center;
        font-size: 0.8rem;
    }

    .help_message > ul {
        border-right: solid 1px rgba(0, 0, 0, 0.296);
        padding-right: 5px;
        list-style: none;
    }

</style>
