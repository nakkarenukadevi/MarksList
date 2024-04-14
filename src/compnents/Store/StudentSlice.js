import { createSlice } from "@reduxjs/toolkit"

const StudentMarksSlice = createSlice({
    name: "smarks",
    initialState: {
        sdata: []

    },
    reducers: ({
        studentdata: (state, action) => {
            state.sdata = action.payload

        }
    })

})
export const { studentdata } = StudentMarksSlice.actions;
export default StudentMarksSlice.reducer
