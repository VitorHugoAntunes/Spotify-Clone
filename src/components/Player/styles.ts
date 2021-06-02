import styled, {css} from 'styled-components';

import {
    ArrowUpward,
    Favorite,
    PlayArrow, 
    PictureInPicture,
    Shuffle,
    SkipPrevious,
    SkipNext,
    Repeat,
    MusicNote,
    ListAlt,
    Devices,
    VolumeFull,
    Fullscreen
} from '../../styles/Icons';

export const iconCSS = css`
    height: 18px;
    width: 18px;
    fill: #c1c1c1;
`;

export const Container = styled.div`
    height: 11.5vh;
    width: 100vw;
    background: #181818;
    border-top: 1px solid #282828;
    
    > div {
        padding: 0 20px 0 20px;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    > div > div:first-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
`;

export const SongInfo = styled.div`
    display: flex;
    flex-direction: row;

    display: flex;
    align-items: center;

    gap: 15px;
`;

export const Banner = styled.div`
    height: 55px;
    width: 55px;
    background: #d9d9d9;
    border-radius: 2px;
    position: relative;

    > div {
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        position: absolute;
        padding: 4px;
        border-radius: 50%;
        right: 5px;
        top: 5px;
        display: none;
    }

    &:hover {
        cursor: pointer;
        > div {
            display: flex; 
        }
    }
`;

export const SongTitle = styled.div`
    line-height: 14px;
    > h4 {
        font-size: 14px;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
    > small {
        font-size: 11px;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

export const SongOptions = styled.div`
    > svg:first-child{
        margin-right: 15px;
        fill: #1DB954;
    }

    > svg:last-child:hover{
        fill: #fff;
    }
`;

export const PlayerOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;
`;

export const PlayerControls = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    margin-bottom: 5px;

    > svg {
        height: 20px;
        width: 20px;

        &:hover {
            fill: #fff;
        }
    }

    > svg:nth-child(2){
            margin-right: 20px;
        }
        
    > svg:nth-child(4){
        margin-left: 20px;
    }

    > div.play {
        width: 32px;
        height: 32px;
        display: flex;
        background: #fff;
        border-radius: 50%;

        align-items: center;
        justify-content: center;
        position: absolute;
        align-self: center;
        left: 0;
        right: 0;
        margin: auto;

        > svg {
            fill: #000;
            height: 20px;
            width: 20px;
        }

        &:hover {
            width: 35px;
            height: 35px;
        }
    }
    
`;

export const PlayerBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    

    > span {
        font-size: 11px;
    }
`;

export const Bar = styled.div`
    height: 4px;
    width: 34vw;
    background: #535353;
    border-radius: 4px;
`;

export const PlayerAsideOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 13px;

    > svg:hover, > div > svg:hover {
            fill: #fff;
        }
`;


export const SoundControl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    > div:nth-child(2) {
        width: 95px;
    }
`;

export const ArrowUp = styled(ArrowUpward)`${iconCSS}`;

export const ShuffleIcon = styled(Shuffle)`${iconCSS}`;

export const PreviousIcon = styled(SkipPrevious)`${iconCSS}`;

export const PlayIcon = styled(PlayArrow)`${iconCSS}`;

export const NextIcon = styled(SkipNext)`${iconCSS}`;

export const RepeatIcon = styled(Repeat)`${iconCSS}`;

export const FavoriteIcon = styled(Favorite)`${iconCSS}`;

export const PictureInPictureIcon = styled(PictureInPicture)`${iconCSS}`;

export const LyricsIcon = styled(MusicNote)`${iconCSS}`;

export const ListIcon = styled(ListAlt)`${iconCSS}`;

export const DeviceIcon = styled(Devices)`${iconCSS}`;

export const SoundIcon = styled(VolumeFull)`${iconCSS}`;

export const FullScreenIcon = styled(Fullscreen)`${iconCSS}`;