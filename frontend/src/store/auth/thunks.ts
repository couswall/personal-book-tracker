import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch } from "../store"
import { 
    logginError, 
    loginStart,
    loginSuccess, 
    registerUserError, 
    registerUserStart, 
    registerUserSuccess 
} from "./authSlice";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import { ILoginFetchResponse, IRegisterUserParams } from "./interfaces";
import { urlWeb } from "../../constants/apiEndpoints";

const apiUrl = getEnvVariables().api_url;

export const loginAuthUser = (emailOrUsername: string, password: string) => {
    return async(dispatch: AppDispatch) => {
        dispatch(loginStart());
        try {
            const {data}: AxiosResponse<ILoginFetchResponse> = await axios.post(
                `${apiUrl}${urlWeb.login}`, 
                {emailOrUsername, password}
            );
            dispatch(loginSuccess(data.data));
        } catch (error) {
            if(error instanceof AxiosError){
                const errorMsg = error.response?.data.error?.message ?? '';
                dispatch(logginError(errorMsg));
            }
        }
    }
};

export const registerUser = (newUser: IRegisterUserParams) => {
    return async(dispatch: AppDispatch) => {
        dispatch(registerUserStart());
        try {
            const {data}: AxiosResponse<ILoginFetchResponse> = await axios.post(
                `${apiUrl}${urlWeb.registerUser}`, newUser
            );
            dispatch(registerUserSuccess(data.data));
        } catch (error) {
            if(error instanceof AxiosError){
                const errorMsg = error.response?.data.error?.message ?? '';
                dispatch(registerUserError(errorMsg));
            }
        }
    };
};