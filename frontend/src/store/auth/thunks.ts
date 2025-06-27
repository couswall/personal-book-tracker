import axios, { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction } from "react-router";
import { getEnvVariables } from "@helpers/getEnvVariables";
import { ILoginFetchResponse, ILoginParams, IRegisterUserParams } from "@store/auth/interfaces";
import { urlWeb } from "@constants/apiEndpoints";
import { privateRoutes } from "@routes/routes";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = getEnvVariables().api_url;

export const loginUser = createAsyncThunk(
    'auth/login',
    async (
        { credentials, navigate }: { credentials: ILoginParams; navigate: NavigateFunction }, 
        thunkAPI
    ) => {
        try {
            const { data }: AxiosResponse<ILoginFetchResponse> = await axios.post(
                `${apiUrl}${urlWeb.login}`,
                credentials,
            );
            
            navigate(privateRoutes.myBooks);
            return data.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return thunkAPI.rejectWithValue(error.response?.data.error?.message || 'Login failed');
            }
            return thunkAPI.rejectWithValue('Unknown error');
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/register',
    async(
        {newUser, navigate}: {newUser: IRegisterUserParams, navigate: NavigateFunction},
        {rejectWithValue}
    ) => {
        try {
            const {data}: AxiosResponse<ILoginFetchResponse> = await axios.post(
                `${apiUrl}${urlWeb.registerUser}`, newUser
            );

            navigate(privateRoutes.myBooks);
            return data.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return rejectWithValue(error.response?.data.error?.message || 'Login failed');
            }
            return rejectWithValue('Unknown error');
        }
    }
)