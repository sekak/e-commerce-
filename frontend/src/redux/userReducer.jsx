import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  User:{},
  stateUser: false
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUser: (state,action)=>{
        state.User = action.payload
        state.stateUser = action.payload.state
    },
    deleteUser: (state) =>
    {
        state.User = {}
        state.stateUser = false
    },
    
  },
})
 


export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer