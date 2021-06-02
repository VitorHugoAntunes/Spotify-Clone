import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import Playlist from "./pages/Playlist"
import Global from "./styles/Global";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/playlist" component={Playlist} exact/>
      </Switch>
      <Global />
    </BrowserRouter>
  );
}

export default App;