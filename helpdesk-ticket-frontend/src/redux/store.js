import { configureStore } from '@reduxjs/toolkit'
import ticketTempSlice from './DataTableReducer'

export const store = configureStore({
    reducer:{
        ticketTempSlice
    }
})