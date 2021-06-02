import styled, {css} from "styled-components";

import {
    MoreHoriz,
    Verified,
    Favorite,
    PlayArrow,
} from '../../styles/Icons';

export const iconCSS = css`
    width: 24px;
    height: 24px;
    padding: 1px;
    fill: #D9D9D9;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: overlay;
    position: relative;

    background: #121212;

    ::-webkit-scrollbar {
        background: transparent;
        width: 12px;
    } 
    ::-webkit-scrollbar-thumb {
        background: rgba(240,240,240, 0.3)
    }

    > div:first-child {
        position: absolute;
        background: transparent;
    }
`;

export const PlaylistBanner = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;

    @media (max-width: 1250px) {
        .Title {
            font-size: 70px;
            line-height: 70px;
        }
    }
`;

export const BackgroundImage = styled.div`
    position: relative;
    height: 100%;
    max-width: 100%;
    max-height: 42.5vh;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        opacity: 0.8;
    }
`;

export const VerifiedArtist = styled.div`
    height: fit-content;
    position: absolute;
    bottom: 30px;
    left: 30px;
    
    > div:first-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;

        > span {
            font-size: 14px;
            font-weight: bold;
        }
    }

    > div > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    > div > div > svg {
        padding: 0;
        border-radius: 50%;
    }

    > span {
        font-weight: 400;
        color: #fff;
    }
`;

export const Title = styled.div`
    line-height: 100px;
    font-size: 100px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
    user-select: none;
`;

export const PlaylistContainer = styled.div`
    padding: 20px 30px;
    background-image: linear-gradient(#4B4B4B, #121212 230px);

    > h2 {
        margin-top: 20px;
    }

    > a {
        top: 100px;
        margin-left: 25px;
        text-decoration: none;
        font-size: 12px;
        font-weight: bold;

        &:hover {
            color: #fff;
        }
    }
`;

export const PlaylistOptions = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    height: 70px;
`;

export const PlayButton = styled.div`
    height: 65px;
    width: 65px;
    background: #1DB954;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    > svg {
        height: 45px;
        width: 45px;
        fill: #fff;
    }

    &:hover {
        cursor: pointer;
        height: 70px;
        width: 70px;
        left: -2.5px;

        > svg {
            height: 48px;
            width: 48px;
        }
    }
`;

export const FollowButton = styled.div`
    margin-left: 100px;
    padding: 4px 15px 7px 15px;
    border: 1px solid #FFF;
    border-radius: 4px;
    margin-right: 30px;

    > span {
        font-weight: bold;
        font-size: 14px;
    }
`;

export const MoreOptions = styled.div`
    > svg:hover {
        fill: #fff;
    }
`;

export const PopularSongsList = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Song = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 55px;
    align-items: center;
    justify-content: space-between;

    border-radius: 4px;
    padding: 0 25px;
    gap: 20px;

    > div:nth-child(1) {
        position: relative;

        > svg {
            position: absolute;
            right: -10px;
            opacity: 0;
        }
    }

    > div:nth-child(2) {
        max-width: 650px;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;

        > span {
            font-weight: bold;
        }
    }

    > div:nth-child(3) {
        max-width: 370px;
        width: 100%;

        > span {
            font-size: 14px;
        }
    }

    > div:nth-child(4){
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;

        > svg:first-child {
            height: 22px;
            width: 22px;
            fill: #1DB954;
        }

        > svg:last-child {
            opacity: 0;
        }
    }

    &:hover {
        background: rgba(255, 255, 255, 0.1);

        > div:nth-child(1) {
            > span {
                opacity: 0;
            }
            > svg {
                opacity: 1;
            }
        }

        > div:nth-child(4) {
            > svg:last-child {
                opacity: 1;
            }
        } 
    }
`;

export const Banner = styled.div`
    width: 40px;
    height: 40px;
    background: #aaaaaa;
    border-radius: 2px;
`;

export const VerifiedIcon = styled(Verified)`${iconCSS}`;

export const PlayIcon = styled(PlayArrow)`${iconCSS}`;

export const MoreIcon = styled(MoreHoriz)`${iconCSS}`;

export const FavoriteIcon = styled(Favorite)`${iconCSS}`;