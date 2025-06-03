import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './thunkFunctions';

const initialState = {
  userData: {
    id: '',
    email: '',
    name: '',
    role: 0,
    image: '',
  },
  isAuth: false,
  isLoading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {   // 요청 시작(pending)
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {  // 요청 완료(fulfilled)
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {  // 요청 거부
        state.isLoading = false;
        state.error = action.payload
      })
  }
})

export default userSlice.reducer;
