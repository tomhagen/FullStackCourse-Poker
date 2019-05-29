// NOTY.JS thư viện hiển thị popup

import React, { Component } from "react";
import Axios from 'axios';

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TaiKhoan: "",
      MatKhau: "",
      Email: "",
      SoDT: "",
      MaNhom: "GP01",
      MaLoaiNguoiDung: "KhachHang",
    };
  }

  handleOnChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })

  }
  handleOnSubmit = (event) => {
      event.preventDefault();
      Axios({
          method:  'POST',
          url: 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung',
          data: this.state
      })
      // axios trả về một đối tượng promist, có 2 phương thức là then & catch
      .then( res => {
          console.log(res);
          // khi hiện component với root thì mặc định sẽ có 3 props là : history , match & location
          alert('Đăng ký thành công');
          this.props.history.push('/signin');
          // replace khác push là không back lại trang trước đó được
        //   this.props.history.replace('/signin');
      })
      .catch( error => {
          console.log(error);
      });
    
  }
  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleOnSubmit}>
          <h1 className="display-4">Đăng Ký</h1>
          <div className="form-group">
            <label>Tài Khoản</label>
            <input 
                required
                type="text" 
                className="form-control" 
                name="TaiKhoan"
                onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <label>Mật Khẩu</label>
            <input 
                required
               
                type="password" 
                className="form-control" 
                name="MatKhau"
                onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
                required
                type="email" 
                className="form-control"
                name="Email" 
                onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <label>Số ĐT</label>
            <input 
                required
                type="number"
                 className="form-control"
                 name="SoDT" 
                 onChange={this.handleOnChange}/>
          </div>
          <button className="btn btn-success">Đăng ký</button>
        </form>
      </div>
    );
  }
}
export default signup;
