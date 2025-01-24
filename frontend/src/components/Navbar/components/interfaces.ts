import { RefObject } from "react";

export interface SearchBarNavProps {
    showSearchInput: boolean;
    setShowSearchInput: React.Dispatch<React.SetStateAction<boolean>>;
    searchBarRef: RefObject<HTMLDivElement>;
}

export interface NavbarItemsProps extends SearchBarNavProps{
    
}