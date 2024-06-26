import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import type { DetailPost } from '../../types/backend'

export interface PostState {
  postInfo: DetailPost;
  loading: boolean;
  error: boolean
}

const initialState = {
  postInfo: { userId: 0, id: 0, title: '', body: '' },
  loading: false,
  error: false
} satisfies PostState as PostState

export const fetchPostInfo = createAsyncThunk<DetailPost, number, { rejectValue: string }>(
  'posts/fetchPostInfo',
  async (postId: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return response.data
  }
)

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchPostInfo.pending, (state, action) => {
      state.loading = true
      state.error = false
    })
    .addCase(fetchPostInfo.fulfilled, (state, action) => {
      state.postInfo = action.payload
      state.loading = false
      state.error = false
    })
    .addCase(fetchPostInfo.rejected, (state, action) => {
      state.loading = false
      state.error = true
    })
  }
})

export default postSlice.reducer