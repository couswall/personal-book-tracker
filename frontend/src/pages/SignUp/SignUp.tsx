import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components"
import { useState } from "react";
import { lightTeam } from "../../styles/Theme"
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FlexContainer, FormContainer, Icon, Input, Label, Paragraph, TitleH2 } from "../../components"
import { ErrorMessage } from "../Login/ErrorMessage";
import { FormField } from "./FormField";
import { publicRoutes } from "../../routes/routes";
import { schemaSignUpValidations } from './schemaSignUpValidations';
import { ISignUpForm } from "./interfaces";
import { SIGN_UP, SIGNUP_FORM } from "./constants";

export const SignUp = () => {
  const {register, formState: {errors}, handleSubmit} = useForm<ISignUpForm>({
    resolver: yupResolver(schemaSignUpValidations)
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = (data: ISignUpForm) => {};
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
          Width="720px"
          SmallPadding="2.125rem 2.375rem"
        >
          <TitleH2 FontSize="2rem" Margin="0px 0px 0.5rem 0px" TextAlign="center" LineHeight="1">
            {SIGN_UP.TITLE}
          </TitleH2>
          <Paragraph FontSize="0.875rem" FontColor="#DA498D" TextAlign="center">
            {SIGN_UP.DESCRIPTION}
          </Paragraph>

          <FormContainer
            FlexDirection="column"
            Gap="1rem"
            MarginTop="2rem"
            Width="100%"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FlexContainer
              FlexDirection="column"
              Gap="1.25rem"
              Width="100%"
            >
              <FlexContainer Gap="1rem" SmallFlexDir="column">
                <FormField
                  fieldName="fullName"
                  label={SIGNUP_FORM.FULL_NAME.LABEL}
                  placeholder={SIGNUP_FORM.FULL_NAME.PLACEHOLDER}
                  iconClass="fa-solid fa-user"
                  register={register}
                  errors={errors}
                  inputMaxLength={40}    
                />
                <FormField
                  fieldName="username"
                  label={SIGNUP_FORM.USERNAME.LABEL}
                  placeholder={SIGNUP_FORM.USERNAME.PLACEHOLDER}
                  iconClass="fa-solid fa-circle-user"
                  register={register}
                  errors={errors}
                  inputMaxLength={30}       
                />
              </FlexContainer>

              <FlexContainer Gap="1rem" SmallFlexDir="column">
                <FormField
                  fieldName="email"
                  label={SIGNUP_FORM.EMAIL.LABEL}
                  placeholder={SIGNUP_FORM.EMAIL.PLACEHOLDER}
                  iconClass="fa-solid fa-envelope"
                  register={register}
                  errors={errors}        
                />
                <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                  <Label FontSize="0.875rem" FontColor="#333333">
                    {SIGNUP_FORM.PASSWORD.LABEL}
                  </Label>
                  <FlexContainer 
                    Gap="0.5rem" 
                    Padding="1rem 0px" 
                    BorderBottom={errors.password ? '1px solid #FA4032' : '1px solid #d9d9d9'} 
                    AlignItems="center" 
                    Width="100%"
                  >
                    <Icon className="fa-solid fa-lock" FontColor="#333333" FontSize="1rem"/>
                    <Input 
                      Border="none" 
                      BorderRadius="0px"
                      FontSize="1rem"
                      placeholder={SIGNUP_FORM.PASSWORD.PLACEHOLDER}
                      Width="100%"
                      FontColor="#333333"
                      type={showPassword ? 'text' : 'password'}
                      {...register('password')}
                      maxLength={16}
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
              </FlexContainer>


              <Button type="submit">
                {SIGN_UP.BTN_SUBMIT}
              </Button>

              <FlexContainer JustifyContent="center" Gap="0.5rem" MarginTop="1.5rem">
                <Paragraph FontSize="0.875rem" FontColor="#DA498D" TextAlign="center">
                    {SIGN_UP.HAVE_AN_ACCOUNT}
                </Paragraph>
                <Paragraph 
                  FontSize="0.875rem" 
                  FontColor="#DA498D" 
                  TextDecoration="underline"
                  Cursor="pointer" 
                  onClick={() => navigate(publicRoutes.login)}
                >
                  {SIGN_UP.LOGIN_HERE}
                </Paragraph>
              </FlexContainer>
            </FlexContainer>
          </FormContainer>
        </FlexContainer>
      </FlexContainer>
    </ThemeProvider>
  )
}
