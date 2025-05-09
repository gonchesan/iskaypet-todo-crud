import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';

import Layout from '@/views/_layout';

import { ROUTES } from '@/constants/routes';
import EmptyState from '@/components/EmptyState';

const Routing = () => {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (location === '/') {
      setLocation('/tasks');
    }
  }, [location]);

  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route path={route.path}>
          <Layout
            title={route.label}
            children={
              route.component ? (
                React.createElement(route.component)
              ) : (
                <EmptyState
                  title='Servicio no disponible'
                  description='Este servicio aún no está disponible. Inténtelo más tarde.'
                />
              )
            }
          ></Layout>
        </Route>
      ))}
    </Switch>
  );
};

export default Routing;
