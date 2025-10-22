import React from 'react';
import {FlexContainer, Image, TitleH3} from '@components/index';

interface CoverBookImgProps {
    imgSrc?: string | null;
    width?: string;
    height?: string;
    flex?: string;
}

export const CoverBookImg: React.FC<CoverBookImgProps> = ({
    imgSrc,
    width = '220px',
    height = '280px',
    flex,
}) => {
    return (
        <FlexContainer
            BorderRadius="0.5rem"
            Overflow="hidden"
            Width={width}
            Height={height}
            Flex={flex}
        >
            {imgSrc ? (
                <Image src={imgSrc} Width="100%" Height="100%" ObjectFit="fill" />
            ) : (
                <FlexContainer
                    Width="100%"
                    Height="100%"
                    JustifyContent="center"
                    AlignItems="center"
                >
                    <TitleH3>{'No Image Available'}</TitleH3>
                </FlexContainer>
            )}
        </FlexContainer>
    );
};
