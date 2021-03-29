import React, { Suspense, lazy, Route } from 'react';
import { Switch } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import routes from './routes';
import Preloader from '../components/UI/Preloader';

const HomeView = lazy(() =>
  import('../views/Home.js' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('../views/Register.js' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('../views/Login.js' /* webpackChunkName: "login-page" */),
);

const ApartmentsView = lazy(() =>
  import('../views/Apartments.js' /* webpackChunkName: "contacts-page" */)
);

const Router = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path={routes.home} exact component={HomeView}/>
          <Route 
              path={routes.register}
          component={RegisterView}
          />
            <Route
              path={routes.login} 
            component={LoginView}
          />
            {/* <Route 
              path={routes.apartments}
          component={ApartmentsView}
            /> */}
      </Switch>
    </Suspense>
  );
};

export default Router;

/* <PublicRoute path={routes.home} exact>
              <HomeView/>
            </PublicRoute>
            <PublicRoute 
              path={routes.register}
              restricted
              redirectTo={routes.apartments} 
            >
              <RegisterView/>
            </PublicRoute>
            <PublicRoute
              path={routes.login} 
              restricted 
              redirectTo={routes.apartments} 
            >
              <LoginView/>
            </PublicRoute>
            <PrivateRoute 
              path={routes.apartments}
              redirectTo={routes.login} 
            >
              <ApartmentsView/>
            </PrivateRoute> */