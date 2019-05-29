import React from "react";
import  { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

const index = ({loginUser}) => {
  // bóc tách thuộc tính ngay trên hàm , stateless ko co this.props được
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/home" className="navbar-brand" href="#">
        POCKER
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink activeStyle={{color:'white'}} to="/signup" className="nav-link" href="#">
              Đăng ký 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={{color:'white'}} to="/signin" className="nav-link" href="#">
              Đăng Nhập
            </NavLink>
          </li>
        </ul>
        <div>
          {/* check null */}
          <p className="text-white mx-0">Xin Chào , {loginUser && loginUser.TaiKhoan}</p>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    loginUser : state.user.userProfile
  }
}
export default connect(mapStateToProps,null) (index);
