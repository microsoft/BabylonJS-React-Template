import { createSlice } from '@reduxjs/toolkit'
import { VIEW } from '../constants/view'

const initialState = {
    view: VIEW.HOME,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setView: (state, action) => {
            state.view = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setView } = appSlice.actions

export default appSlice.reducer