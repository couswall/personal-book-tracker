import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStatus, IAuthSliceState, ILoginSuccessRes } from "@store/auth/interfaces";

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
        registerUserLoading: false,
    },
    errors: {
        loginErrorMsg: undefined,
        registerUserErrorMsg: undefined,
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
        },
        registerUserStart: (state) => {
            state.status = AuthStatus.Checking;
            state.loadings.registerUserLoading = true;
            state.errors.registerUserErrorMsg = undefined;
        },
        registerUserSuccess: (state, action: PayloadAction<ILoginSuccessRes>) => {
            state.status = AuthStatus.Authenticated;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loadings.registerUserLoading = false;
            state.errors.registerUserErrorMsg = undefined;
        },
        registerUserError: (state, action: PayloadAction<string>) => {
            state.status = AuthStatus.NoAuthenticated;
            state.loadings.registerUserLoading = false;
            state.errors.registerUserErrorMsg = action.payload;
        },
        onLogout: (state) => {
            state.status = initialState.status;
            state.user = initialState.user;
            state.token = initialState.token;
            state.loadings = initialState.loadings;
            state.errors = initialState.errors;
        },
        cleanErrorMessages: (state) => {
            state.errors = initialState.errors;
        }
    }
});

export const {
    cleanErrorMessages,
    loginStart,
    loginSuccess,
    logginError,
    registerUserStart,
    registerUserSuccess,
    registerUserError,
    onLogout,
} = authSlice.actions;