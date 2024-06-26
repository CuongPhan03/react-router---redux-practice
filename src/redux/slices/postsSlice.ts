import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import type { Post, DetailPost } from '../../types/backend'

export interface PostsState {
  listPosts: Post[]
  loading: boolean;
  error: boolean
}

const initialState = {
  listPosts: [],
  loading: false,
  error: false
} satisfies PostsState as PostsState

export const fetchPostsByAuthor = createAsyncThunk<Post[], number, { rejectValue: string }>(
  'posts/fetchPostsByAuthor',
  async (author: number) => {
    const url: string = 'https://jsonplaceholder.typicode.com/posts' + (author === 0 ? '' : `?userId=${author}`)
    const response = await axios.get(url)
    const data = response.data.map((dt: DetailPost) => { 
      return { userId: dt.userId, id: dt.id, title: dt.title }
    })
    return data
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchPostsByAuthor.pending, (state, action) => {
      state.loading = true
      state.error = false
    })
    .addCase(fetchPostsByAuthor.fulfilled, (state, action) => {
      state.listPosts = action.payload
      state.loading = false
      state.error = false
    })
    .addCase(fetchPostsByAuthor.rejected, (state, action) => {
      state.loading = false
      state.error = true
    })
  }
})

export default postsSlice.reducer