import styled from 'styled-components';
import {FlexContainer} from '@components/index';

export const ModalSidebarContainer = styled(FlexContainer)<{$isVisible: boolean}>`
    width: 280px;
    height: 100%;
    flex-direction: column;

    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    transform: translateX(${(props) => (props.$isVisible ? '0' : '-100%')});

    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                opacity 0.3s ease-out;
`;
