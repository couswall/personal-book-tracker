import axios, { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction } from "react-router";
import { AppDispatch } from "@store/store"
import { 
    logginError, 
    loginStart,
    loginSuccess, 
    registerUserError, 
    registerUserStart, 
    registerUserSuccess 
} from "@store/auth/authSlice";
import { getEnvVariables } from "@helpers/getEnvVariables";
import { ILoginFetchResponse, ILoginParams, IRegisterUserParams } from "@store/auth/interfaces";
import { urlWeb } from "@constants/apiEndpoints";
import { privateRoutes } from "@routes/routes";

const apiUrl = getEnvVariables().api_url;

export const loginAuthUser = (params: ILoginParams, navigate: NavigateFunction) => {
    return async(dispatch: AppDispatch) => {
        dispatch(loginStart());
        try {
            const {data}: AxiosResponse<ILoginFetchResponse> = await axios.post(
                `${apiUrl}${urlWeb.login}`, 
                params,
            );
            dispatch(loginSuccess(data.data));
            navigate(privateRoutes.myBooks);
        } catch (error) {
            if(error instanceof AxiosError){
                const errorMsg = error.response?.data.error?.message ?? '';
                dispatch(logginError(errorMsg));
            }
        }
    }
};

export const registerUser = (newUser: IRegisterUserParams, navigate: NavigateFunction) => {
    return async(dispatch: AppDispatch) => {
        dispatch(registerUserStart());
        try {
            const {data}: AxiosResponse<ILoginFetchResponse> = await axios.post(
                `${apiUrl}${urlWeb.registerUser}`, newUser
            );
            dispatch(registerUserSuccess(data.data));
            navigate(privateRoutes.myBooks);
        } catch (error) {
            if(error instanceof AxiosError){
                const errorMsg = error.response?.data.error?.message ?? '';
                dispatch(registerUserError(errorMsg));
            }
        }
    };
};