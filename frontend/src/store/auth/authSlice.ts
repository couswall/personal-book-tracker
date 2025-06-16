import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStatus, IAuthSliceState, ILoginSuccessRes } from "./interfaces";

const initialState: IAuthSliceState = {
    status: AuthStatus.Checking,
    user: {
        id: 0,
        fullName: '',
        username: '',
        email: '',
    },
    token: '',
    loadings: {
        loginLoading: false,
    },
    errors: {
        loginErrorMsg: undefined,
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.status = AuthStatus.Checking;
            state.loadings.loginLoading = true;
            state.errors.loginErrorMsg = undefined;
        },
        loginSuccess: (state, action: PayloadAction<ILoginSuccessRes>) => {
            state.status = AuthStatus.Authenticated;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loadings.loginLoading = false;
            state.errors.loginErrorMsg = undefined;
        },
        logginError: (state, action: PayloadAction<string>) => {
            state.status = AuthStatus.NoAuthenticated;
            state.loadings.loginLoading = false;
            state.errors.loginErrorMsg = action.payload;
        }
    }
});

export const {
    loginStart,
    loginSuccess,
    logginError,
} = authSlice.actions;