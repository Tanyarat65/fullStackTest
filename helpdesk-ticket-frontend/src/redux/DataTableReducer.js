import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dataEdit: {
        key : 0,
        ticket_id : '',
        tittle : '',
        description : '',
        name : '',
        email : '',
        phone : '',
        status : '',
        age : 0,
    },
}

const ticketTempSlice = createSlice({
    name : 'ticketTempSlice',
    initialState,
    reducers:{
        getDataEdit: (state,action) => {
            state.dataEdit = {...state.dataEdit, ...action.payload}
        }
    }

})

export const {getDataEdit} = ticketTempSlice.actions
export default ticketTempSlice.reducer