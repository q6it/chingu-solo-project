import { createSelector } from '@reduxjs/toolkit';

export const selectSlice = (state) => state.authentication;

export const selectUser = createSelector(selectSlice, (auth) => auth);
