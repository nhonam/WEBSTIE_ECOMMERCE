import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              // return <Redirect to="/login" />;
              <Route
              
              element={<Navigate to="/login" replace />}
          />
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Route
              
              element={<Navigate to="/login" replace />}
          />
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
