import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser, authUser, logoutUser, addToCart } from './thunkFunctions';
import { toast } from 'react-toastify';

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
      /* register addCase */
      .addCase(registerUser.pending, (state) => {   // 요청 시작(pending)
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {  // 요청 완료(fulfilled)
        state.isLoading = false;
        toast.success('회원가입을 성공했습니다.')
      })
      .addCase(registerUser.rejected, (state, action) => {  // 요청 거부
        state.isLoading = false;
        state.error = action.payload
        toast.error(action.payload);
      })

      /* login addCase */
      .addCase(loginUser.pending, (state) => {   // 요청 시작(pending)
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {  // 요청 완료(fulfilled)
        state.isLoading = false;
        state.userData = action.payload;
        state.isAuth = true;
        localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken))
      })
      .addCase(loginUser.rejected, (state, action) => {  // 요청 거부
        state.isLoading = false;
        state.error = action.payload
        toast.error(action.payload);
      })

      /* auth addCase*/
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isAuth = true;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
        state.userData = initialState.userData;
        state.isAuth = false;
        localStorage.removeItem('accessToken');
      })

      /* logout addCase*/
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.userData = initialState.userData;
        state.isAuth = false;
        localStorage.removeItem('accessToken');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
        toast.error(action.payload);
      })

      /* add to cart */
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData.cart = action.payload;
        toast.info('장바구니에 추가되었습니다.');
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })

  }
})

export default userSlice.reducer;
