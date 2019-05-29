// chứa những component chính, vd: header, footer
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import SignUp from "../screens/auth/signup";
import SignIn from "../screens/auth/signin";
import Home from "../screens/home";
import Header from "./header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// cách 2 để đảm bảo đường dẫn chính xác là dùng Switch và chuyển component có path đơn giản Home xuống dưới cùng
import LoginGuard from "../components/guard";
import { actUserLogin } from "../store/actions";
import Game from "../screens/game";

class Layout extends Component {

  componentDidMount(){
    const user = localStorage.getItem('userLogin');
    if(user){
      this.props.onLoadUserProfile(JSON.parse(user));
    }
    
  }


  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <main>
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <LoginGuard path="/home" component={Home} />
              <LoginGuard path="/game" component={Game} />
              <Redirect to="/home" />
              {/* gõ path không đúng thì chuyển về trang home */}
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadUserProfile: user => {
      dispatch(actUserLogin(user));
    }
  };
};


export default connect(
  null,
  mapDispatchToProps
)(Layout);
