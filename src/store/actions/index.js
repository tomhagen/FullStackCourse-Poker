import { USER_LOGIN } from "../constants";
import Axios from "axios";

export const actUserLogin = user => {
  return {
    type: USER_LOGIN,
    payload: user
  };
};
// callback là hàm truyền vào hàm khác dưới dạng tham số
export const requestLoginUser = (username,password,callback) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${
        username
      }&MatKhau=${password}`
    })
      .then(result => {
        if (typeof result.data !== "string") {
          console.log(result);
          alert("đăng nhập thành công");
          localStorage.setItem("userLogin", JSON.stringify(result.data));
          // local chỉ cho lưu chuỗi nên chuyển object JSON về chuỗi
        
          dispatch(actUserLogin(result.data));
          //   this.props.onLogin(result.data);
        //   this.props.history.push("/home");
        // không xài đc history do đây là action chứ ko phải component
        callback();
        } else {
          alert("Sai");
        }
      })
      .catch(error => {
        console.log(error);
        alert("Sai rồi");
      });
  };
};


// MIDDLEWARE
// là lớp chắn ngang giữa component ( sign in ) và store
// giữ action lại nếu chưa có kết quả từ server, hoặc lỗi
// đảm bảo dữ liệu khi đi tới store là luôn luôn có