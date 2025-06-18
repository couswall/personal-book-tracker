import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch, RootState } from '../../../store/store';
import { SubMenuContainer, SubMenuLink } from '../styles';
import { TitleH4 } from '../../Typography';
import { FlexContainer } from '../../FlexContainer';
import { onLogout } from '../../../store';
import { publicRoutes } from '../../../routes/routes';
import { subMenuRoutes } from '../constants';

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
            <TitleH4 LightColor={true} FontSize="1rem" LetterSpacing="1.3px">
                {`Hello, ${name}`}
            </TitleH4>
            <FlexContainer FlexDirection="column" BackgroundColor="inherit">
                {subMenuRoutes.map((item, index) => (
                    <FlexContainer key={index} BackgroundColor="inherit" Height="32px" AlignItems="center">
                        <SubMenuLink LightColor={true} FontSize="0.875rem" LetterSpacing="1px" Cursor='pointer'>
                            {item.label}
                        </SubMenuLink>
                    </FlexContainer>
                ))}
            </FlexContainer>
            
            <FlexContainer FlexDirection="column" BackgroundColor="inherit" BorderTop="1px solid #FFFFFE">
                <FlexContainer BackgroundColor="inherit" Height="32px" AlignItems="center">
                    <SubMenuLink 
                        LightColor={true} 
                        FontSize="0.875rem" 
                        LetterSpacing="1px" 
                        Cursor='pointer'
                        onClick={onSignout}
                    >
                        {'Sign out'}
                    </SubMenuLink>
                </FlexContainer>
            </FlexContainer>
        </SubMenuContainer>
  )
}
