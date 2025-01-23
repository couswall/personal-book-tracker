import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { FlexContainer, Navbar } from '../components'
import { darkTheme, lightTeam } from '../styles/Theme'
import { RootState } from '../store/store'

export const DashboardLayout = () => {
  const {isDarkMode} = useSelector((state: RootState) => state.darkMode);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTeam}>
        <FlexContainer FlexDirection='column' BackgroundColor='transparent'>
            <Navbar/>
            <Outlet/>
        </FlexContainer>
      </ThemeProvider>
    </>
  )
}
