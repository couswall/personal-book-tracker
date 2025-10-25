import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router';
import {AppDispatch, RootState} from '@store/store';
import {SubMenuContainer, SubMenuLink} from '@components/Navbar/styles';
import {TitleH4} from '@components/Typography';
import {FlexContainer} from '@components/FlexContainer';
import {onLogout} from '@store/index';
import {publicRoutes} from '@routes/routes';
import {subMenuRoutes} from '@components/Navbar/constants';

export const SubMenuNav = () => {
    const {user} = useSelector((state: RootState) => state.auth);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const name = user.fullName.split(' ')[0];
    const onSignout = () => {
        dispatch(onLogout());
        navigate(publicRoutes.login);
    };
    return (
        <SubMenuContainer
            FlexDirection="column"
            Gap="1rem"
            Padding="0.5rem 1rem"
            Position="absolute"
            Width="250px"
            Top="48px"
            Right="0"
        >
            <TitleH4 FontColorVariant="white" FontSize="1rem" LetterSpacing="1.3px">
                {`Hello, ${name}`}
            </TitleH4>
            <FlexContainer FlexDirection="column" BackgroundColor="inherit">
                {subMenuRoutes.map((item, index) => (
                    <FlexContainer
                        key={index}
                        BackgroundColor="inherit"
                        Height="32px"
                        AlignItems="center"
                    >
                        <SubMenuLink
                            FontColorVariant="white"
                            FontSize="0.875rem"
                            LetterSpacing="1px"
                            Cursor="pointer"
                        >
                            {item.label}
                        </SubMenuLink>
                    </FlexContainer>
                ))}
            </FlexContainer>

            <FlexContainer
                FlexDirection="column"
                BackgroundColor="inherit"
                BorderTop="1px solid #FFFFFE"
            >
                <FlexContainer BackgroundColor="inherit" Height="32px" AlignItems="center">
                    <SubMenuLink
                        FontColorVariant="white"
                        FontSize="0.875rem"
                        LetterSpacing="1px"
                        Cursor="pointer"
                        onClick={onSignout}
                    >
                        {'Sign out'}
                    </SubMenuLink>
                </FlexContainer>
            </FlexContainer>
        </SubMenuContainer>
    );
};
