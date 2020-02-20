import {BASE_REQUEST,
    ORGANIZE_MODULES,
    CHANGE_VALUE_INPUT,
    FILTERS_OFF,
    FILTERS_OK,
    SELECT_FILTER,
    SHOW_SINGLE_RESOURCE,
    HIDE_SINGLE_RESOURCE,
} from '../actions/languagesAction'

const initialState = {
    base: [], 
    filteredBase:[],
    modules_id:[],
    textValue: '',
    language_id: '',
    module_id: '',
    filterActivated: false,
    modalLoading: true,
    modalSingleResource: false,
    singleReourceID: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BASE_REQUEST : {
            
            
            let base = action.dataRequested.slice()

            const filteredBase = base
            const modalLoading = false

            return{
                ...state,
                base,
                filteredBase,
                modalLoading,

            }
            
        }
        case ORGANIZE_MODULES:{
            let modules_id = new Set()
            const base = state.base.slice()
            
            base.forEach(element => {
                modules_id.add(element.resource.module_id)    
            });

            return{
                ...state,
                modules_id
            }
        }

        case CHANGE_VALUE_INPUT:{
        
            const textValue = action.text

            return { 
                ...state,
                textValue,
            }
        }
    
        case FILTERS_OFF:{
    
            const textValue = ''
            const language_id = ''
            const module_id = ''
            const filterActivated = false
            const filteredBase = []
            return {
                ...state,
                textValue,
                language_id,
                module_id,
                filterActivated,
                filteredBase,
            }
        }
    
        case FILTERS_OK:{
            
            let filteredBase = state.base.slice()
            const textValue = state.textValue
            const language_id = state.language_id
            const module_id = state.module_id
            const filterActivated = true

            if(textValue !== ''){
                filteredBase = filteredBase.filter(resource=>{
                    return resource.resource.value.includes(textValue)
                }) 
            }
            
            if(language_id !== ''){
                filteredBase = filteredBase.filter(resource=>{
                    return resource.resource.language_id.includes(language_id)
                })
            }
            
            if(module_id !== ''){
                filteredBase = filteredBase.filter(resource=>{
                    return resource.resource.module_id.includes(module_id)
                })
            }

            return{
                ...state,
                filteredBase,
                filterActivated,
            }
        }
    
        case SELECT_FILTER:{
            let language_id = action.data
            let module_id = action.data
            if(action.selector == 'language'){
                console.log(`entrou no da linaguagem`)
                return{
                    ...state,
                    language_id,
                }
            }
            if(action.selector == 'modules'){
                console.log(`entrou no da module`)
                return{
                    ...state,
                    module_id,
                }
            }
            return{ ...state }
        }

        case SHOW_SINGLE_RESOURCE:{
            const modalSingleResource = true
            const singleReourceID = action.index
            
            return {
                ...state,
                modalSingleResource,
                singleReourceID,
            }
        }

        case HIDE_SINGLE_RESOURCE:{
            const modalSingleResource = false
            
            return {
                ...state,
                modalSingleResource,
            }
        }

        default:
            state
    }
    return state
}
