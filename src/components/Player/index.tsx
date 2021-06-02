import {
    Container,
    SongInfo,
    Banner,
    ArrowUp,
    SongTitle,
    SongOptions,
    FavoriteIcon,
    PictureInPictureIcon,
    PlayerOptions,
    PlayerControls,
    ShuffleIcon,
    PreviousIcon,
    PlayIcon,
    NextIcon,
    RepeatIcon,
    PlayerBar,
    Bar,
    PlayerAsideOptions,
    LyricsIcon,
    ListIcon,
    DeviceIcon,
    SoundControl,
    SoundIcon,
    FullScreenIcon
} from './styles';

function Player() {
    return (
        <Container>
            <div>
                <div>
                    <SongInfo>
                        <Banner>
                            <div>
                                <ArrowUp />
                            </div>
                        </Banner>
                        <SongTitle>
                            <h4>High Hopes</h4>
                            <small>Panic! At The Disco</small>
                        </SongTitle>
                    </SongInfo>
                    <SongOptions>
                        <FavoriteIcon />
                        <PictureInPictureIcon />
                    </SongOptions>
                </div>

                <PlayerOptions>
                    <PlayerControls>
                        <ShuffleIcon />
                        <PreviousIcon />
                        <div className="play">
                            <PlayIcon />
                        </div>
                        <NextIcon />
                        <RepeatIcon />
                    </PlayerControls>
                    <PlayerBar>
                        <span>0:04</span>
                        <Bar>

                        </Bar>
                        <span>3:10</span>
                    </PlayerBar>
                </PlayerOptions>

                <PlayerAsideOptions>
                    <LyricsIcon />
                    <ListIcon />
                    <DeviceIcon />
                    <SoundControl>
                        <SoundIcon />
                        <Bar className="soundBarAside"></Bar>
                    </SoundControl>
                        <FullScreenIcon />
                </PlayerAsideOptions>
            </div>
        </Container>
    )
}

export default Player;