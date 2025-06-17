import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, FlexContainer, FormContainer, Icon, Input, Label, LoadingSpinner, Paragraph, TitleH2 } from "../../components"
import { ErrorMessage } from "./ErrorMessage";
import { AppDispatch, RootState } from "../../store/store";
import { loginAuthUser } from "../../store";
import { schemaLoginValidations } from "./schemaLoginValidations";
import { lightTeam } from "../../styles/Theme"
import { ILoginForm } from "./interfaces";
import { publicRoutes } from "../../routes/routes";
import { LOGIN_PAGE } from "./constants";
import { ErrorAlert } from "../SignUp/ErrorAlert";

export const Login = () => {
  const {register, handleSubmit, formState:{errors}} = useForm<ILoginForm>({
    resolver: yupResolver(schemaLoginValidations)
  });
  const dispatch: AppDispatch = useDispatch();
  const {errors: errorsMsg, loadings} = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = (data: ILoginForm) => {
    dispatch(loginAuthUser(data, navigate));
  };

  return (
    <ThemeProvider theme={lightTeam}>
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
          <TitleH2 FontSize="2rem" Margin="0px 0px 0.5rem 0px" TextAlign="center" LineHeight="1">
            {LOGIN_PAGE.TITLE}
          </TitleH2>
          <Paragraph FontSize="0.875rem" FontColor="#DA498D" TextAlign="center">
            {LOGIN_PAGE.DESCRIPTION}
          </Paragraph>

          {errorsMsg.loginErrorMsg && (
            <ErrorAlert errorMessage={errorsMsg.loginErrorMsg}/>
          )}

          <FormContainer
            FlexDirection="column"
            Gap="1rem"
            MarginTop="2rem"
            Width="100%"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FlexContainer
              FlexDirection="column"
              Gap="1rem"
              Width="100%"
            >
              <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                <Label FontSize="0.875rem" FontColor="#333333">
                  {LOGIN_PAGE.FIELDS.EMAIL_USERNAME.LABEL}
                </Label>
                <FlexContainer 
                  Gap="0.5rem" 
                  Padding="1rem 0px" 
                  BorderBottom={errors.emailOrUsername ? '1px solid #FA4032' : '1px solid #d9d9d9'} 
                  AlignItems="center" 
                  Width="100%"
                >
                  <Icon className="fa-solid fa-user" FontColor="#333333" FontSize="1rem"/>
                  <Input 
                    Border="none" 
                    BorderRadius="0px"
                    FontSize="1rem"
                    placeholder={LOGIN_PAGE.FIELDS.EMAIL_USERNAME.PLACEHOLDER}
                    Width="100%"
                    FontColor="#333333"
                    type="text"
                    {...register('emailOrUsername')}
                  />
                </FlexContainer>
                {errors.emailOrUsername?.message && <ErrorMessage message={errors.emailOrUsername.message}/>}
              </FlexContainer>

              <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                <Label FontSize="0.875rem" FontColor="#333333">
                  {LOGIN_PAGE.FIELDS.PASSWORD.LABEL}
                </Label>
                <FlexContainer Gap="0.5rem" Padding="1rem 0px" BorderBottom="1px solid #d9d9d9" AlignItems="center" Width="100%">
                  <Icon className="fa-solid fa-lock" FontColor="#333333" FontSize="1rem"/>
                  <Input 
                    Border="none" 
                    BorderRadius="0px"
                    FontSize="1rem"
                    placeholder={LOGIN_PAGE.FIELDS.PASSWORD.PLACEHOLDER}
                    Width="100%"
                    FontColor="#333333"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                  />
                  <Icon 
                    className={`fa-regular ${showPassword ? 'fa-eye':'fa-eye-slash'}`} 
                    FontColor="#333333" 
                    FontSize="1rem"
                    Cursor="pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </FlexContainer>
                {errors.password?.message && <ErrorMessage message={errors.password.message}/>}
              </FlexContainer>

              <FlexContainer JustifyContent="end" MarginBottom="1rem">
                <Paragraph FontSize="0.875rem" FontColor="#DA498D" Cursor="pointer">
                  {LOGIN_PAGE.FORGOT_PASSWORD}
                </Paragraph>
              </FlexContainer>

              <Button type="submit" disabled={loadings.loginLoading}>
                  {loadings.loginLoading ? (
                    <FlexContainer Width="100%" BackgroundColor="transparent" JustifyContent="center">
                      <LoadingSpinner Width="25px" Padding="5px" BackGroundColor="#FFFFFE"/>
                    </FlexContainer>
                  ) : (<>{LOGIN_PAGE.BTN_LOGIN}</>)}
              </Button>

              <FlexContainer JustifyContent="center" Gap="0.5rem" MarginTop="1.5rem">
                <Paragraph FontSize="0.875rem" FontColor="#DA498D" Cursor="pointer" TextAlign="center">
                    {LOGIN_PAGE.ACCOUNT_CTA}
                </Paragraph>
                <Paragraph 
                  FontSize="0.875rem" 
                  FontColor="#DA498D" 
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
    </ThemeProvider>
  )
}
