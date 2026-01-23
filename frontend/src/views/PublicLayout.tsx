import {Outlet} from 'react-router';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {FlexContainer} from '@components/index';
import {darkTheme, lightTeam} from '@styles/Theme';
import {RootState} from '@store/store';

export const PublicLayout = () => {
    const {isDarkMode} = useSelector((state: RootState) => state.darkMode);
    return (
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTeam}>
                <FlexContainer FlexDirection="column" BackgroundColor="transparent">
                    {/* TODO: Create Public Navbar */}
                    {/* <Navbar/> */}
                    <Outlet />
                </FlexContainer>
            </ThemeProvider>
        </>
    );
};
