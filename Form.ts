import { ref } from "vue"
/**
 * String Inputs
 */

    interface StringInput {
        label: string,
        value: string,
    }

    interface Name extends StringInput
    {
        component: 'name',
    }

    interface CodiceFiscale extends StringInput
    {
        component: 'codice_fiscale',
    }

/**
 * Number Inputs
 */    

    interface NumberInput {
        label: string,
        value: number
    }

    interface Percentage extends NumberInput
    {
        component: 'percentage'
    }

/**
 * Objects
 */

interface ObjectInput {
    label: string,
}

interface Collection extends ObjectInput
{
    component: 'collection',
    components: {[key : string] : FormComponent }
}



type FormComponent = null       |
    Name                        | 
    CodiceFiscale               |
    Percentage                  |
    Collection
;

const FormComponents =  ref<{[key : number] : {[key : string] : FormComponent }[] }>()

export default FormComponents