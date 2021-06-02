import {
    CategorieDiv,
    Banner,
    PlayIcon
} from './styles';

function Categorie() {
    return (
        <CategorieDiv>
            <div>
                <Banner />
                <h4>Hollywood's Bleeding</h4>
            </div>
            <div className="playHover">
                <PlayIcon />
            </div>
        </CategorieDiv>
    )
}

export default Categorie;