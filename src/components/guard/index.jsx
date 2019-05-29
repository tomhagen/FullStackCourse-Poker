import React from "react";
import { Route, Redirect } from "react-router-dom";

const loginGuard = ({ component: Component, path }) => {
  return (
    <div>
      {/* <Route to={path} component={Component}/>             */}
      <Route
        to={path}
        render={routeProps => {
            if(localStorage.getItem('userLogin')){
                return <Component {...routeProps} />;
                // routeProps là một object, ghi... vậy nghĩa là truyền vào 3 thuộc tính history,... cho component
            }
            alert('Vui lòng đăng nhập')
          return <Redirect to="/signin"/> 
          
        }}
      />
    </div>
  );
};

export default loginGuard;
