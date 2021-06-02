import Categorie from '../Categorie';
import Feed from '../Feed';
import Header from '../Header';
import {
    Container,
    TopContent,
    TopMain,
    TopCategories,
} from './styles';

function Main() {
    return (
        <Container>
            <Header />
            <TopContent>
                <TopMain>
                    <div>
                        <h1>Boa tarde</h1>
                    </div>

                    <TopCategories>
                        <Categorie />
                        <Categorie />
                        <Categorie />
                        <Categorie />
                        <Categorie />
                        <Categorie />
                        <Categorie />
                        <Categorie />
                    </TopCategories>
                </TopMain>
            </TopContent>

        <Feed />
        </Container>
    )
}

export default Main;