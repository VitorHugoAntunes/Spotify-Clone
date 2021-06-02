import{
    Container,
    TopSide,
    MenuButton,
    LogoIcon,
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    AddIcon,
    FavoriteIcon,
    MiddleSide,
    BotSide,
    InstallIcon
} from './styles';

function MenuBar() {
    return (
        <Container>
            <TopSide>
                <div>
                    <MenuButton>
                        <LogoIcon />
                        <span>Spotify</span>
                    </MenuButton>
                </div>
                <div>
                    <MenuButton>
                        <HomeIcon />
                        <span>Inicio</span>
                    </MenuButton>
                    <MenuButton>
                        <SearchIcon />
                        <span>Buscar</span>
                    </MenuButton>
                    <MenuButton>
                        <LibraryIcon />
                        <span>Sua biblioteca</span>
                    </MenuButton>
                </div>
                <div>
                    <MenuButton>
                        <AddIcon />
                        <span>Criar playlist</span>
                    </MenuButton>
                    <MenuButton>
                        <FavoriteIcon />
                        <span>Musicas curtidas</span>
                    </MenuButton>
                </div>
            </TopSide>
            <MiddleSide>
                <div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                    <div><span>Playlist melhores musicas 2005 remastered</span></div>
                </div>
                
            </MiddleSide>

            <BotSide>
                <InstallIcon />
                <span>Instalar aplicativo</span>
            </BotSide>

        </Container>
    )
}

export default MenuBar;