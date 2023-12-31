import { ref } from "vue"
/**
 * String Inputs
 */

    interface StringInput {
        label: string,
        value: string,
        onKeyup?: Function,
        hidden?: boolean
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
        value: number,
        onKeyup?: Function,
        hidden?: boolean
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
    hidden?: boolean
}

interface Collection extends ObjectInput
{
    component: 'collection',
    components: {[key : string] : FormComponent },
    value: {[key : string] : FormComponent }[]
}

interface StepForm extends ObjectInput
{
    component: 'step_form',
    components: {[key : string] : FormComponent }[],
    value: number
}



type FormComponent =
    Name                        | 
    CodiceFiscale               |
    Percentage                  |
    Collection                  |
    StepForm
;

const FormComponents =  ref<{[key : number] : {[key : string] : FormComponent } }>({})

export {
    FormComponents,
    type Name,
    type CodiceFiscale,
    type Percentage,
    type Collection,
    type StepForm,
}