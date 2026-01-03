import {useNavigate} from 'react-router';
import {FlexContainer, Paragraph} from '@components/index';
import {CoverBookImg} from '@pages/Book/components/index';
import {IBookInfoCardProps} from '@pages/Search/interfaces';

export const BookInfoCard: React.FC<IBookInfoCardProps> = ({
    book,
    onClickOption,
    imageWidth = '50px',
    imageHeight = '70px',
}) => {
    const navigate = useNavigate();
    const handleSelectOption = (bookId: string) => {
        navigate(`/book/${bookId}`);
        if (onClickOption) onClickOption();
    };
    return (
        <FlexContainer
            Gap="0.5rem"
            Padding="0.5rem"
            Cursor="pointer"
            Width="max-content"
            onClick={() => handleSelectOption(String(book.id))}
        >
            <CoverBookImg
                imgSrc={book.imageCover}
                width={imageWidth}
                height={imageHeight}
                flex="none"
            />
            <FlexContainer
                FlexDirection="column"
                Gap="0.25rem"
                Overflow="hidden"
                BackgroundColor="transparent"
            >
                <Paragraph
                    FontSize="0.875rem"
                    FontWeight="600"
                    WhiteSpace="nowrap"
                    Width="100%"
                    Overflow="hidden"
                    TextOverflow="ellipsis"
                >
                    {book.title}
                </Paragraph>
                {book.authors && (
                    <Paragraph
                        FontSize="0.75rem"
                        WhiteSpace="nowrap"
                        Width="100%"
                        Overflow="hidden"
                        TextOverflow="ellipsis"
                    >{`by ${book.authors.join(',')}`}</Paragraph>
                )}
            </FlexContainer>
        </FlexContainer>
    );
};
