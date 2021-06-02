import {Link} from 'react-router-dom';

import {
    HeaderDiv,
    Button,
    BackIcon,
    ForwardIcon,
    ProfileButton,
    UserIcon,
    ArrowDownIcon,
} from './styles';

function Header() {
    return (
        <HeaderDiv className="fadeIn">
            <div className="headerNavButtons">
                <Link className="Link back" to="/">
                    <Button className="BackButton">
                        <BackIcon />
                    </Button>
                </Link>
                <Link className="Link forward" to="Playlist">
                    <Button>
                        <ForwardIcon />
                    </Button>
                </Link>
            </div>

            <ProfileButton>
                <div>
                    <UserIcon />
                </div>
                <span>Vitor</span>
                <ArrowDownIcon />
            </ProfileButton>
        </HeaderDiv>
    )
}

export default Header;