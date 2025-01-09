import { ThemeProvider } from "styled-components"
import { Button, FlexContainer, FormContainer, Icon, Input, Label, Paragraph, TitleH2 } from "../../components"
import { lightTeam } from "../../styles/Theme"

export const Login = () => {
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
        >
          <TitleH2 FontSize="2rem" Margin="0px 0px 0.5rem 0px" TextAlign="center">
            {'Welcome back'}
          </TitleH2>
          <Paragraph FontSize="0.875rem" FontColor="#DA498D" TextAlign="center">
            {'Enter your login credentials.'}
          </Paragraph>

          <FormContainer
            FlexDirection="column"
            Gap="1rem"
            MarginTop="2rem"
            Width="100%"
          >
            <FlexContainer
              FlexDirection="column"
              Gap="0.5rem"
              Width="100%"
            >
              <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                <Label FontSize="0.875rem" FontColor="#333333">{'Email'}</Label>
                <FlexContainer Gap="0.5rem" Padding="1rem 0px" BorderBottom="1px solid #d9d9d9" AlignItems="center" Width="100%">
                  <Icon className="fa-solid fa-user" FontColor="#333333" FontSize="1rem"/>
                  <Input 
                    Border="none" 
                    BorderRadius="0px"
                    FontSize="1rem"
                    placeholder="Type your email"
                    Width="100%"
                    FontColor="#333333"
                    type="email"
                  />
                </FlexContainer>
              </FlexContainer>

              <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
                <Label FontSize="0.875rem" FontColor="#333333">{'Password'}</Label>
                <FlexContainer Gap="0.5rem" Padding="1rem 0px" BorderBottom="1px solid #d9d9d9" AlignItems="center" Width="100%">
                  <Icon className="fa-solid fa-lock" FontColor="#333333" FontSize="1rem"/>
                  <Input 
                    Border="none" 
                    BorderRadius="0px"
                    FontSize="1rem"
                    placeholder="Type your password"
                    Width="100%"
                    FontColor="#333333"
                    type="password"
                  />
                </FlexContainer>
              </FlexContainer>

              <FlexContainer JustifyContent="end" MarginBottom="1rem">
                <Paragraph FontSize="0.875rem" FontColor="#DA498D" Cursor="pointer">
                  {'Forgot password?'}
                </Paragraph>
              </FlexContainer>

              <Button type="submit">
                {'Login'}
              </Button>
            </FlexContainer>
          </FormContainer>
          
        </FlexContainer>
      </FlexContainer>
    </ThemeProvider>
  )
}
