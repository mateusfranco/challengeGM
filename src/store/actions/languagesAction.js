export const BASE_REQUEST = 'BASE_REQUEST'
export const ORGANIZE_MODULES = 'ORGANIZE_MODULES' 
export const FILTERS_OK = 'FILTERS_OK' 
export const FILTERS_OFF = 'FILTERS_OFF' 
export const CHANGE_VALUE_INPUT = 'CHANGE_VALUE_INPUT'
export const SELECT_FILTER = 'SELECT_FILTER' 
export const SHOW_SINGLE_RESOURCE = "SHOW_SINGLE_RESOURCE"
export const HIDE_SINGLE_RESOURCE = "HIDE_SINGLE_RESOURCE"

export const activeFilters = () => ({
    type: FILTERS_OK,
})

export const resetFilters = () => ({
    type: FILTERS_OFF,
})

export const changeTextInput = (text) => ({
    type: CHANGE_VALUE_INPUT,
    text,
})

export const selectorActivated = (data,selector) => ({
    type: SELECT_FILTER,
    data,
    selector,
})

export const baseRequest = (dataRequested) => ({
    type: BASE_REQUEST,
    dataRequested,
})

export const selectModules = () => ({
    type: ORGANIZE_MODULES,
})

export const showResource = (index) => ({
    type: SHOW_SINGLE_RESOURCE,
    index,
})

export const hideResource = () => ({
    type: HIDE_SINGLE_RESOURCE,
})


