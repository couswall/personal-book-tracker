import {ErrorIcon, FlexContainer, Paragraph} from '@components/index';

export const ErrorMessage = ({message = ''}) => {
    return (
        <FlexContainer Gap="0.5rem" AlignItems="center" BackgroundColor="inherit">
            <ErrorIcon className="fa-solid fa-x" FontSize="0.625rem" />
            <Paragraph FontSize="0.75rem" FontColorVariant="error">
                {message}
            </Paragraph>
        </FlexContainer>
    );
};
