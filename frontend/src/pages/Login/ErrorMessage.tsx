import { ErrorIcon, ErrorText, FlexContainer } from "@components/index";

export const ErrorMessage = ({message = ''}) => {
  return (
    <FlexContainer Gap="0.5rem" AlignItems="center">
        <ErrorIcon className="fa-solid fa-x" FontSize="0.625rem"/>
        <ErrorText FontSize="0.75rem">{message}</ErrorText>
    </FlexContainer>
  )
}
