import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {yupResolver} from '@hookform/resolvers/yup';
import {useEffect, useState} from 'react';
import {
    Button,
    FlexContainer,
    FormContainer,
    DarkGreyIcon,
    Input,
    Label,
    LoadingSpinner,
    TitleH2,
    InputContainer,
    Paragraph,
} from '@components/index';
import {ErrorMessage} from '@pages/Login/ErrorMessage';
import {AppDispatch, RootState} from '@store/store';
import {cleanErrorMessages, loginUser} from '@store/index';
import {schemaLoginValidations} from '@pages/Login/schemaLoginValidations';
import {ILoginForm} from '@pages/Login/interfaces';
import {publicRoutes} from '@routes/routes';
import {LOGIN_PAGE} from '@pages/Login/constants';
import {ErrorAlert} from '@pages/SignUp/ErrorAlert';

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ILoginForm>({
        resolver: yupResolver(schemaLoginValidations),
    });
    const dispatch: AppDispatch = useDispatch();
    const {errors: errorsMsg, loadings} = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const onSubmit = (data: ILoginForm) => {
        dispatch(loginUser({credentials: data, navigate}));
    };

    useEffect(() => {
        if (errorsMsg.loginErrorMsg) {
            dispatch(cleanErrorMessages());
        }
    }, []);

    return (
        <FlexContainer JustifyContent="center" AlignItems="center" MinHeight="100vh">
            <FlexContainer
                JustifyContent="center"
                AlignItems="center"
                FlexDirection="column"
                Padding="3.125rem 3.375rem"
                BoxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                BorderRadius="1rem"
                Width="500px"
                SmallPadding="2.125rem 2.375rem"
            >
                <TitleH2
                    FontSize="2rem"
                    Margin="0px 0px 0.5rem 0px"
                    TextAlign="center"
                    LineHeight="1"
                >
                    {LOGIN_PAGE.TITLE}
                </TitleH2>
                <Paragraph FontSize="0.875rem" TextAlign="center" FontColorVariant="light">
                    {LOGIN_PAGE.DESCRIPTION}
                </Paragraph>

                {errorsMsg.loginErrorMsg && <ErrorAlert errorMessage={errorsMsg.loginErrorMsg} />}

                <FormContainer
                    FlexDirection="column"
                    Gap="1rem"
                    MarginTop="2rem"
                    Width="100%"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FlexContainer FlexDirection="column" Gap="1rem" Width="100%">
                        <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                            <Label FontSize="0.875rem">
                                {LOGIN_PAGE.FIELDS.EMAIL_USERNAME.LABEL}
                            </Label>
                            <InputContainer
                                Gap="0.5rem"
                                Padding="1rem 0px"
                                AlignItems="center"
                                Width="100%"
                                hasError={!!errors.emailOrUsername?.message}
                            >
                                <DarkGreyIcon className="fa-solid fa-user" FontSize="1rem" />
                                <Input
                                    BackgroundColor="transparent"
                                    Border="none"
                                    BorderRadius="0px"
                                    FontSize="1rem"
                                    placeholder={LOGIN_PAGE.FIELDS.EMAIL_USERNAME.PLACEHOLDER}
                                    Width="100%"
                                    type="text"
                                    {...register('emailOrUsername')}
                                />
                            </InputContainer>
                            {errors.emailOrUsername?.message && (
                                <ErrorMessage message={errors.emailOrUsername.message} />
                            )}
                        </FlexContainer>

                        <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                            <Label FontSize="0.875rem">{LOGIN_PAGE.FIELDS.PASSWORD.LABEL}</Label>
                            <InputContainer
                                Gap="0.5rem"
                                Padding="1rem 0px"
                                AlignItems="center"
                                Width="100%"
                                hasError={!!errors.password?.message}
                            >
                                <DarkGreyIcon className="fa-solid fa-lock" FontSize="1rem" />
                                <Input
                                    BackgroundColor="transparent"
                                    Border="none"
                                    BorderRadius="0px"
                                    FontSize="1rem"
                                    placeholder={LOGIN_PAGE.FIELDS.PASSWORD.PLACEHOLDER}
                                    Width="100%"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password')}
                                />
                                <DarkGreyIcon
                                    className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                    FontSize="1rem"
                                    Cursor="pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </InputContainer>
                            {errors.password?.message && (
                                <ErrorMessage message={errors.password.message} />
                            )}
                        </FlexContainer>

                        <FlexContainer JustifyContent="end" MarginBottom="1rem">
                            <Paragraph
                                FontSize="0.875rem"
                                Cursor="pointer"
                                FontColorVariant="light"
                            >
                                {LOGIN_PAGE.FORGOT_PASSWORD}
                            </Paragraph>
                        </FlexContainer>

                        <Button type="submit" disabled={loadings.loginLoading}>
                            {loadings.loginLoading ? (
                                <FlexContainer
                                    Width="100%"
                                    BackgroundColor="transparent"
                                    JustifyContent="center"
                                >
                                    <LoadingSpinner
                                        Width="25px"
                                        Padding="5px"
                                        BackGroundColor="#FFFFFE"
                                    />
                                </FlexContainer>
                            ) : (
                                <>{LOGIN_PAGE.BTN_LOGIN}</>
                            )}
                        </Button>

                        <FlexContainer JustifyContent="center" Gap="0.5rem" MarginTop="1.5rem">
                            <Paragraph
                                FontSize="0.875rem"
                                Cursor="pointer"
                                TextAlign="center"
                                FontColorVariant="light"
                            >
                                {LOGIN_PAGE.ACCOUNT_CTA}
                            </Paragraph>
                            <Paragraph
                                FontSize="0.875rem"
                                FontColorVariant="light"
                                TextDecoration="underline"
                                Cursor="pointer"
                                onClick={() => navigate(publicRoutes.signUp)}
                            >
                                {LOGIN_PAGE.SIGN_UP_HERE}
                            </Paragraph>
                        </FlexContainer>
                    </FlexContainer>
                </FormContainer>
            </FlexContainer>
        </FlexContainer>
    );
};
