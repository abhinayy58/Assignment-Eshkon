import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  theme: string;
  isLoading: boolean;
}

const initialState: AppState = {
  theme: 'light',
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme); // Update local storage
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Load theme from local storage
if (typeof window !== 'undefined') {
  // Perform localStorage action
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    initialState.theme = savedTheme;
  }
}



export const { toggleTheme, setLoaded } = appSlice.actions;
export default appSlice.reducer;

