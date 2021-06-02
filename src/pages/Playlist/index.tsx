import MenuBar from '../../components/MenuBar';
import Player from '../../components/Player';
import {Container, Wrapper} from './styles';
import PlaylistContent from '../../components/PlaylistContent';

function PlaylistPage() {
    return (
        <Container>
            <Wrapper>
                <div>
                    <MenuBar />    
                    <PlaylistContent />
                </div>
                <Player />
            </Wrapper>
        </Container>
    )
}

export default PlaylistPage;