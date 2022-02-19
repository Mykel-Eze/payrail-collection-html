import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ component: Component, ...rest }) =>  {
const {auth} = useSelector(state=>state)
    const {token = ""} = auth
  
    return(
    <Route
        {...rest}
        render={(props) =>
          token ?
        <Component {...props} />
          : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          )
        }
      />
  )
  
  
  };

export default PrivateRoutes;