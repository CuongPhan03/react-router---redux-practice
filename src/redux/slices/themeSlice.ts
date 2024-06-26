import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  value: string
}

const initialState: ThemeState = {
  value: 'light',
} satisfies ThemeState as ThemeState

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light'
    }
  },
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer