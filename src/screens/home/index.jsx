import React from 'react';
import {Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-50 mx-auto">
            <h1 className="display-3 ">Welcome</h1>
            <Link to="/game" className="btn btn-success">Play Game</Link>
            {/* <Switch>

            </Switch> */}
        </div>
    );
};

export default Home;