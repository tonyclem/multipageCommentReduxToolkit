import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Lisa buffy' },
  { id: '1', name: 'Neil Boss' },
  { id: '2', name: 'fried john' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
