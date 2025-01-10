import { useForm } from "react-hook-form"
import { useState } from "react";
import { ThemeProvider } from "styled-components"
import { useNavigate } from "react-router";
import { lightTeam } from "../../styles/Theme"
import { Button, FlexContainer, FormContainer, Icon, Input, Label, Paragraph, TitleH2 } from "../../components"
import { publicRoutes } from "../../routes/routes";

export interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const {register, formState: {errors}} = useForm<ISignUpForm>();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
            {'Create an account'}
          </TitleH2>
          <Paragraph FontSize="0.875rem" FontColor="#DA498D" TextAlign="center">
            {'Sign up to continue'}
          </Paragraph>

          <FormContainer
            FlexDirection="column"
            Gap="1rem"
            MarginTop="2rem"
            Width="100%"
          >
            <FlexContainer
              FlexDirection="column"
              Gap="1rem"
              Width="100%"
            >
              <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                <Label FontSize="0.875rem" FontColor="#333333">{'Name'}</Label>
                <FlexContainer 
                  Gap="0.5rem" Padding="1rem 0px" 
                  BorderBottom={errors.name ? '1px solid #FA4032' : '1px solid #d9d9d9'} 
                  AlignItems="center" 
                  Width="100%"
                >
                  <Icon className="fa-solid fa-user" FontColor="#333333" FontSize="1rem"/>
                  <Input 
                    Border="none" 
                    BorderRadius="0px"
                    FontSize="1rem"
                    placeholder="Type your name"
                    Width="100%"
                    FontColor="#333333"
                    type="text"
                    {...register('name')}
                  />
                </FlexContainer>
                {/* {errors.email?.message && <ErrorMessage message={errors.name.message}/>} */}
              </FlexContainer>

              <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                <Label FontSize="0.875rem" FontColor="#333333">{'Email'}</Label>
                <FlexContainer 
                  Gap="0.5rem" 
                  Padding="1rem 0px" 
                  BorderBottom={errors.email ? '1px solid #FA4032' : '1px solid #d9d9d9'} 
                  AlignItems="center" 
                  Width="100%"
                >
                  <Icon className="fa-solid fa-envelope" FontColor="#333333" FontSize="1rem"/>
                  <Input 
                    Border="none" 
                    BorderRadius="0px"
                    FontSize="1rem"
                    placeholder="Type your email"
                    Width="100%"
                    FontColor="#333333"
                    type="email"
                    {...register('email')}
                  />
                </FlexContainer>
                {/* {errors.email?.message && <ErrorMessage message={errors.name.message}/>} */}
              </FlexContainer>

              <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                <Label FontSize="0.875rem" FontColor="#333333">{'Password'}</Label>
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
                    placeholder="Type your password"
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
                {/* {errors.email?.message && <ErrorMessage message={errors.name.message}/>} */}
              </FlexContainer>

              <Button type="submit">
                {'Sign Up'}
              </Button>

              <FlexContainer JustifyContent="center" Gap="0.5rem" MarginTop="1.5rem">
                <Paragraph FontSize="0.875rem" FontColor="#DA498D" Cursor="pointer" TextAlign="center">
                    {'You already have an account?'}
                </Paragraph>
                <Paragraph 
                  FontSize="0.875rem" 
                  FontColor="#DA498D" 
                  TextDecoration="underline"
                  Cursor="pointer" 
                  onClick={() => navigate(publicRoutes.Login)}
                >
                  {'Login here'}
                </Paragraph>
              </FlexContainer>
            </FlexContainer>
          </FormContainer>
        </FlexContainer>
      </FlexContainer>
    </ThemeProvider>
  )
}
