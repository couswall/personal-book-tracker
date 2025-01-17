import { Outlet } from 'react-router'
import { FlexContainer, Navbar } from '../components'
import { ThemeProvider } from 'styled-components'
import { lightTeam } from '../styles/Theme'

export const DashboardLayout = () => {
  return (
    <>
      <ThemeProvider theme={lightTeam}>
        <FlexContainer FlexDirection='column' BackgroundColor='transparent'>
            <Navbar/>
            <Outlet/>
        </FlexContainer>
      </ThemeProvider>
    </>
  )
}
