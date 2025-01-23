import { SubMenuContainer, SubMenuLink } from '../styles'
import { TitleH4 } from '../../Typography'
import { FlexContainer } from '../../FlexContainer'
import { subMenuRoutes } from '../constants'

export const SubMenuNav = () => {
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
            {'Hello, Andre'}
        </TitleH4>
        <FlexContainer FlexDirection="column" BackgroundColor="inherit">
            {subMenuRoutes.map((item, index) => (
                <FlexContainer key={index} BackgroundColor="inherit" Height="32px" AlignItems="center">
                    <SubMenuLink LightColor={true} FontSize="0.875rem" LetterSpacing="1px">
                        {item.label}
                    </SubMenuLink>
                </FlexContainer>
            ))}
        </FlexContainer>
        
        <FlexContainer FlexDirection="column" BackgroundColor="inherit" BorderTop="1px solid #FFFFFE">
            <FlexContainer BackgroundColor="inherit" Height="32px" AlignItems="center">
                <SubMenuLink LightColor={true} FontSize="0.875rem" LetterSpacing="1px">
                    {'Sign out'}
                </SubMenuLink>
            </FlexContainer>
        </FlexContainer>

    </SubMenuContainer>
  )
}
