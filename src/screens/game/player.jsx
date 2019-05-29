import React from "react";
import Card from "./card";
import clsx from 'clsx';

const player = ({player, index}) => {
  return (
    <div className={`player-${index}`}>
      <p className="lead">{player.username}</p>

      <main className="d-flex">
      {player.cards.map((card,index) => {
        return  <Card key={index} card={card} />
      })}
       
       
      </main>
    </div>
  );
};

export default player;

// npm i clsx --save để hỗ trợ viết class khi dùng string template viết dài