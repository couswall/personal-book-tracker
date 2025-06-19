import { FlexContainer, Icon, Paragraph } from "@components/index";

export const ErrorMessage = ({message = ''}) => {
  return (
    <FlexContainer Gap="0.5rem" AlignItems="center">
        <Icon className="fa-solid fa-x" FontColor="#FA4032" FontSize="0.625rem"/>
        <Paragraph FontSize="0.75rem" FontColor="#FA4032">{message}</Paragraph>
    </FlexContainer>
  )
}
