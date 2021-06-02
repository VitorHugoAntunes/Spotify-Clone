import styled, {css} from "styled-components";

import {
    Person, 
    ArrowBack, 
    ArrowForward, 
    ArrowDropDown
} from '../../styles/Icons';

export const iconCSS = css`
    width: 24px;
    height: 24px;
    padding: 1px;
    fill: #D9D9D9;
`;

export const HeaderDiv = styled.div`
    width: 100%;
    display: flex;
    background: #287088;
    z-index: 2;

    flex-direction: row;
    justify-content: space-between;
    position: sticky;
    padding: 15px 30px 15px 30px;
    top: 0px;

    &.fadeIn.appear {
        background: #287088;
    }

    & > div {
        display: flex;
        flex-direction: row;
        height: fit-content;
    }

    & > div:first-child {
        gap: 15px;
       
       & > a > div {
        border-radius: 50%;
        gap: 10px;
        background: #000;
        padding: 5px;
       }        
    }
`;

export const ProfileButton = styled.div`
    background: #000;
    height: fit-content;
    border-radius: 28px;
    gap: 5px;
    padding: 2px;
    
    display: flex;
    align-items: center;

    > div:first-child {
        border-radius: 50%;
        background: #282828;
        padding: 2px;
        display: flex;
        align-items: center;
    }

    > span {
        font-size: 14px;
        font-weight: bold;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const Button = styled.div`
    border-radius: 50%;
`;

export const BackIcon = styled(ArrowBack)`${iconCSS}`;

export const ForwardIcon = styled(ArrowForward)`${iconCSS}`;

export const UserIcon = styled(Person)`${iconCSS}`;

export const ArrowDownIcon = styled(ArrowDropDown)`${iconCSS}`;