import styled, {css} from "styled-components";

import {
    Add, 
    ArrowDropDown, 
    Favorite, 
    LibraryBooks, 
    Home, 
    Search, 
    Spotify
} from '../../styles/Icons';

export const iconCSS = css`
    width: 28px;
    height: 28px;

    fill: #D9D9D9;
`

export const Container = styled.div`
    max-width: 285px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    position: relative;

    resize:horizontal;

    & > div:nth-child(1) {
        padding: 20px 10px 0 15px;
    }
`;

export const TopSide = styled.div`
    margin-bottom: 10px;

    & > div:first-child svg {
        height: 45px;
        width: 45px;
        fill: #fff;
    }
    & > div:first-child span {
        font-size: 25px;
        font-weight: bold;
        color: #fff;
    }

    & > div:nth-child(2) {
        & div:first-child {
            background: #282828;
            border-radius: 4px;

            > span {
                color: white;
            }
            > svg {
                fill: white;
            }
        }
    }

    & > div + div {
        margin-top: 20px;
        
        & > div {
            gap: 15px;
        }
    }

    & > div > div:hover {
        cursor: pointer;
        > span {
            color: #fff;
        }
        > svg {
           fill: #fff;
        }
    }

    & > div:nth-child(3) {
        > div:first-child {
            > svg {
                background: #d9d9d9;
                fill: #222222; 
            }
            &:hover {
                svg {
                    background: #fff;
                } 
            }
        }  
        > div:last-child {
            > svg {
                background: #5040a4;
                fill: #d9d9d9;
            }
            &:hover {
                svg {
                    background: #897dc8;
                } 
            }
        }  
    }
`;

export const MenuButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px 5px 10px;
`;

export const MiddleSide = styled.div`
    display: flex;
    flex-direction: column;

    border-top: 1px solid #282828;

    padding: 10px 10px 0 25px;

    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        background: transparent;
        width: 12px;
        height: 20px;
    } 
    ::-webkit-scrollbar-thumb {
        background: rgba(240,240,240, 0.3)
    }

    & > div > div {
        padding: 5px 0 5px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    & > div > div:nth-child(4), 
    & > div > div:nth-child(16) {
        margin-top: 30px;
    }

    & > div > div > span {
        font-size: 14px;
        font-weight: 400;
        color: #c1c1c1;
    }

    & > div > div > span:hover{
        color: #fff;
    }
`;

export const BotSide = styled.div`
    width: 100%;
    bottom: 0;
    z-index: 2;
    padding: 10px 0 10px 25px;

    display: flex;
    align-items: center;

    background: black;
    gap: 5px;
    
    &:hover {
        cursor: pointer;

        > svg {
            fill: #fff;
            border: 1px solid #fff;
        }
        > span {
            color: #fff;
        }
    }

    > svg {
        border: 1px solid #c1c1c1;
        border-radius: 50%;
        height: 22px;
        width: 22px;
    }

    > span {
        font-size: 14px;
        font-weight: 500;
    }
`;

export const InstallIcon = styled(ArrowDropDown)`${iconCSS}`;

export const LogoIcon = styled(Spotify)`${iconCSS}`;

export const HomeIcon = styled(Home)`${iconCSS}`;

export const SearchIcon = styled(Search)`${iconCSS}`;

export const LibraryIcon = styled(LibraryBooks)`${iconCSS}`;

export const AddIcon = styled(Add)`${iconCSS}`;

export const FavoriteIcon = styled(Favorite)`${iconCSS}`;