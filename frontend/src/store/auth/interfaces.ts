export enum AuthStatus {
    Authenticated = 'authenticated',
    Checking = 'checking',
    NoAuthenticated = 'no-authenticated',
}

export interface IAuthSliceState{
    status: AuthStatus;
    user: IUser;
    token: string;
    loadings: IAuthSliceLoadings;
    errors: IAuthSliceErrors;
}

export interface IUser {
    id: number;
    fullName: string;
    username: string;
    email: string;
}

export interface IAuthSliceLoadings{
    loginLoading: boolean;
}

export interface IAuthSliceErrors{
    loginErrorMsg?: string;
}

export interface ILoginSuccessRes{
    user: IUser;
    token: string;
}

export interface ILoginFetchResponse{
    success: boolean;
    message: string;
    data: ILoginSuccessRes;
}