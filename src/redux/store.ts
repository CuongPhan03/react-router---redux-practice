import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/themeSlice'
import postsReducer from './slices/postsSlice'
import postReducer from './slices/postSlice'

export const store = configureStore({
  reducer: {
    theme: counterReducer,
    posts: postsReducer,
    post: postReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch