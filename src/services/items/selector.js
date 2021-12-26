import { createSelector } from '@reduxjs/toolkit';

export const selectSlice = (state) => state.items;

export const selectItems = createSelector(selectSlice, (items) => items);
