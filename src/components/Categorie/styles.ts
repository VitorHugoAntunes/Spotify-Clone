import styled, {css} from "styled-components";

import { 
    PlayArrow
} from '../../styles/Icons';

export const iconCSS = css`
    width: 24px;
    height: 24px;
    padding: 1px;
    fill: #D9D9D9;
`;

export const CategorieDiv = styled.div`
    display: flex;
    width: 298px;
    height: 80px;
    background: rgba(179, 179, 179, 0.25);
    border-radius: 4px;
    position: relative;
    transition: 0.1s;    

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        > h4 {
            max-width: 50px;
            color: #fff;
            font-weight: bold;
            line-height: 1.5;
        }
        
        > svg {
            fill: white;
        }
    }

    & > div:first-child {
        gap: 15px;
    }

    & > div:last-child {
        background: #1DB954;
        height: 40px;
        width: 40px;
        position: absolute;
        right: 15px;
        top: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        

        border-radius: 50%;

        display: none;
    }

    &:hover {
        background: rgba(179, 179, 179, 0.4);
        cursor: pointer;

        & > div.playHover {
            display: flex;
            
            &:hover {
                height: 45px;
                width: 45px;
                right: 13px;
                top: 17px;
            }
        }
    }
`;

export const Banner = styled.div`
    background:#aaaaaa;
    width: 80px;
    height: 100%;
`;

export const PlayIcon = styled(PlayArrow)`${iconCSS}`;