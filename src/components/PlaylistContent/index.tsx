import Feed from "../Feed";
import Header from "../Header";
import {
    Container,
    BackgroundImage,
    PlaylistBanner,
    VerifiedArtist,
    VerifiedIcon,
    Title,
    PlaylistContainer,
    PlaylistOptions,
    PlayButton,
    PlayIcon,
    FollowButton,
    MoreOptions,
    MoreIcon,
    PopularSongsList,
    Song,
    Banner,
    FavoriteIcon
} from './styles';

import ArtistImage from '../../assets/ArtistImage.jpg'

function PlaylistContent() {
    return (
        <Container>
            <Header />
            <PlaylistBanner>
                <BackgroundImage>
                    <img src={ArtistImage} alt="Artist" />
                    <VerifiedArtist>
                        <div>
                            <div>
                                <VerifiedIcon />
                            </div>
                            <span>Artista verificado</span>
                        </div>
                        <Title className="Title">Panic! At The Disco</Title>
                        <span>19.588.132 ouvintes mensais</span>
                    </VerifiedArtist>
                </BackgroundImage>
            </PlaylistBanner>
            <PlaylistContainer>
                <PlaylistOptions>
                    <PlayButton>
                        <PlayIcon />
                    </PlayButton>
                    <FollowButton><span>SEGUINDO</span></FollowButton>
                    <MoreOptions>
                        <MoreIcon />
                    </MoreOptions>
                </PlaylistOptions>

                <h2>Populares</h2>

                <PopularSongsList>
                    <Song>
                        <div>
                            <span>1</span>
                            <PlayIcon />
                        </div>
                        <div>
                            <Banner />
                            <span>High Hopes</span>
                        </div>
                        <div>
                            <span>1.056.410.223</span>
                        </div>
                        <div>
                            <FavoriteIcon />
                            <span>3:10</span>
                            <MoreIcon />
                        </div>
                    </Song>
                    <Song>
                        <div>
                            <span>1</span>
                            <PlayIcon />
                        </div>
                        <div>
                            <Banner />
                            <span>High Hopes</span>
                        </div>
                        <div>
                            <span>1.056.410.223</span>
                        </div>
                        <div>
                            <FavoriteIcon />
                            <span>3:10</span>
                            <MoreIcon />
                        </div>
                    </Song>
                    <Song>
                        <div>
                            <span>1</span>
                            <PlayIcon />
                        </div>
                        <div>
                            <Banner />
                            <span>High Hopes</span>
                        </div>
                        <div>
                            <span>1.056.410.223</span>
                        </div>
                        <div>
                            <FavoriteIcon />
                            <span>3:10</span>
                            <MoreIcon />
                        </div>
                    </Song>
                    <Song>
                        <div>
                            <span>1</span>
                            <PlayIcon />
                        </div>
                        <div>
                            <Banner />
                            <span>High Hopes</span>
                        </div>
                        <div>
                            <span>1.056.410.223</span>
                        </div>
                        <div>
                            <FavoriteIcon />
                            <span>3:10</span>
                            <MoreIcon />
                        </div>
                    </Song>
                    <Song>
                        <div>
                            <span>1</span>
                            <PlayIcon />
                        </div>
                        <div>
                            <Banner />
                            <span>High Hopes</span>
                        </div>
                        <div>
                            <span>1.056.410.223</span>
                        </div>
                        <div>
                            <FavoriteIcon />
                            <span>3:10</span>
                            <MoreIcon />
                        </div>
                    </Song>
                </PopularSongsList>

                <a href="/Playlist">VER MAIS</a>
            </PlaylistContainer>
            <Feed />
        </Container>
    )
}

export default PlaylistContent;