import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


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
const UserPage = React.lazy(() => import('../../containers/UserPage'));


class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
    }

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <React.Suspense fallback="Cargando...">
            <Switch>
              <Route path="/" exact component={AlbumsPage}/>
              <Route path="/albums" exact component={AlbumsPage}/>
              <Route path="/albums/:id" exact component={AlbumPage}/>
              <Route path="/player" exact component={PlayerPage}/>
              <Route path="/login" exact component={LoginPage}/>
              <PrivateRoute path="/profile" exact component={UserPage}/>
              <Redirect to="/" />
            </Switch>
          </React.Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Router;
