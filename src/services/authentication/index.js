import { createSlice } from '@reduxjs/toolkit';
import { setCredentials, deleteCredentials } from './actions';

const initialState = {
    name: null,
    token: null,
    email: null,
};

const authenticationSlice = createSlice({
    name: 'authenticate',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(setCredentials, (state, { payload }) => {
                if (payload.name) {
                    state.name = payload.name;
                    state.email = payload.email;
                }
                if (payload.token) {
                    // jsCookie.set('accessToken', payload.accessToken);
                    state.token = payload.token;
                }
            })
            .addCase(deleteCredentials, () => initialState);
    },
});

export { setCredentials, deleteCredentials };

export default authenticationSlice.reducer;
