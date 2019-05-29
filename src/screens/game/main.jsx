import React, {useEffect, useState} from "react";
import Player from "./player";
import { connect } from "react-redux";
import { fetchCards } from "../../store/actions/card";

// sử dụng React Hook để giúp stateless dùng được vòng đời DidMount & DidUpdate
// React Hook để 2 mục đích: dùng lifeCycle & useState
const MainComponent = ({ playerList , onSaveDeck, deck}) => {


  // ví dụ useState
  // const [state , setState ] = useState();


// Hook phải đặt ở đầu file, useEffect đại diện cho cả DidMount & DidUpdate
  // đặt tên component bắt đầu bằng chữ hoa => ko sẽ báo lỗi
  useEffect(() => {
    onSaveDeck()
  }, [])

  // ví dụ useState
  // const handleChangeState = () => {
  //   var count = Math.random();
  //   setState(count);
  // }
  // console.log('component render')
  
  return (
    <div style={{ position: "relative", height: "500px" }}>
      {/* ví dụ useState */}
      {/* <button onClick={handleChangeState}>Change State</button> */}
      {/* nếu chỉ có 1 đoạn code thì bỏ ngoặc {} + return là tự hiểu return  */}
      {playerList.map((player, index) => (
        <Player key={index} player={player} index={index + 1} />
      ))}
      <img
        style={{
          position: "absolute",
          width: "100px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)"
        }}
        className="card"
        src="https://i.pinimg.com/564x/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.jpg"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerList: state.player,
    deck: state.deck
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSaveDeck: () => {
      dispatch(fetchCards());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
