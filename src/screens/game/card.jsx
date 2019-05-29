import React from 'react';
import './card.css';
import {connect} from 'react-redux';

// https://i.pinimg.com/564x/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.jpg
const card = ({card, revealStatus}) => {
    return (
        <div>
            <img className="card" src={revealStatus ? card.image: "https://i.pinimg.com/564x/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.jpg"}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        revealStatus: state.status.revealStatus
    }
}

export default connect(mapStateToProps,null) (card);