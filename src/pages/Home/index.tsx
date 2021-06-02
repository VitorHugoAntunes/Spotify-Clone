import MenuBar from '../../components/MenuBar';
import Main from '../../components/Main';
import Player from '../../components/Player';
import {Container, Wrapper} from './styles';

function Home() {
    return (
        <Container>
            <Wrapper>
                <div>
                    <MenuBar />    
                    <Main />
                </div>
                <Player />
            </Wrapper>
        </Container>
    )
}

export default Home;