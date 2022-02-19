import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestRoutes = ({ component: Component, ...rest }) => {

  const {auth} = useSelector(state=>state)
  const {token = ""} = auth

    return(

        <Route
          {...rest}
          render={(props) =>
            !token ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/dashboard',
                  state: { from: props.location },
                }}
              />
            )
          }
        />

    )
  };

export default GuestRoutes;