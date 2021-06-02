import {
    CategorieCardDiv,
    Banner,
    PlayIcon
} from './styles';

function CategorieCard() {
    return (
        <CategorieCardDiv>
            <div>
                <Banner>
                    <div className="playHover">
                        <PlayIcon />
                    </div>
                </Banner>
                <div>
                    <span>Hollywood's Bleeding</span>
                    <div>
                        <span>Post Malone</span>
                    </div>
                </div>
            </div>
        </CategorieCardDiv>
    )
}

export default CategorieCard;