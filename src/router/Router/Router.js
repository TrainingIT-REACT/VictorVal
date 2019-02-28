import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";


// Componente para definir rutas privadas
import PrivateRoute from '../PrivateRoute';

// Layout
import Layout from '../../layout/Layout';

// Page containers
import AlbumsPage from '../../containers/AlbumsPage';
// import AlbumPage from '../../containers/AlbumPage';
// import PlayerPage from '../../containers/PlayerPage';
import LoginPage from '../../containers/LoginPage';

const AlbumPage = React.lazy(() => import('../../containers/AlbumPage'));
const PlayerPage = React.lazy(() => import('../../containers/PlayerPage'));


class Router extends React.Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
    }
  }

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <React.Suspense fallback="Cargando...">
            <Route path="/" exact component={AlbumsPage}/>
            <Route path="/albums" exact component={AlbumsPage}/>
            <Route path="/albums/:id" exact component={AlbumPage}/>
            <Route path="/player" exact component={PlayerPage}/>
            <Route path="/login" exact component={LoginPage}/>
            {/* <PrivateRoute path="/admin" component={Admin}/> */}
          </React.Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Router;
