import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { actUserLogin, requestLoginUser } from "../../store/actions";

class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TaiKhoan: "",
      MatKhau: ""
    };
  }
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
   this.props.onLogin(this.state.TaiKhoan,this.state.MatKhau,() => {
       this.props.history.push('/home');
   });
   // thay vì bỏ Axios trong Submit thì bỏ bên action để tiết kiệm thời gian

    console.log(this.state);
  };
  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleOnSubmit}>
          <h1 className="display-4">Đăng Nhập</h1>
          <div className="form-group">
            <label>Tài Khoản</label>
            <input
              type="text"
              className="form-control"
              name="TaiKhoan"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <label>Mật Khẩu</label>
            <input
              type="password"
              className="form-control"
              name="MatKhau"
              onChange={this.handleOnChange}
            />
          </div>
          <button className="btn btn-success">Đăng nhập</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username,password,callback) => {
      dispatch(requestLoginUser(username,password,callback));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(signin);
