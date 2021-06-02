import styled, {css} from "styled-components";

import {PlayArrow} from '../../styles/Icons';

export const iconCSS = css`
    width: 24px;
    height: 24px;
    padding: 1px;
    fill: #D9D9D9;
`;

export const CategorieCardDiv = styled.div`
    margin-top: 20px;
    background: #181818;
    width: 188px;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;

    &:hover {
        background: rgba(179, 179, 179, 0.1);
        cursor: pointer;

        > div > div:first-child .playHover {
            display: block;
        }
    }
    
   > div {
        margin-top: 15px;
        max-width: 150px;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
   }

    > div > div:first-child {
        width: 150px;
        height: 160px;
        position: relative;

        > div {
            position: absolute;
            bottom: 5px;
            right: 5px;
            padding: 8px;
            background: #1DB954;
            border-radius: 50%;
            display: none;
        }
    }

    > div > div:last-child {
        width: 100%;
        margin-top: 20px;

        white-space: nowrap;
        overflow:hidden;
        text-overflow: ellipsis;

        > span {
            color: #fff;
            font-size: 16px;
            font-weight: bold;
        }

        > div > span {
            color: #c1c1c1;
            font-size: 14px;
        }
    }
`;

export const Banner = styled.div`
    background:#aaaaaa;
    width: 80px;
    height: 100%;
`;

export const PlayIcon = styled(PlayArrow)`${iconCSS}`;