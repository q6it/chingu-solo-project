import { createAction } from '@reduxjs/toolkit';

export const setCredentials = createAction('authentication/login');
export const deleteCredentials = createAction('authentication/logout');
