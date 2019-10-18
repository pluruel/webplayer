import React from "react";
import "./TitleTemplate.scss";
import ButtonNav from "./ButtonNav";

const TitleTemplate = () => {
  const items = [
    {
      id: 1,
      name: "About",
      url: "/about"
    },
    {
      id: 2,
      name: "Player",
      url: "/player"
    }
  ];

  return (
    <div className="TitleTemplate">
      <div className="title">MyApp</div>
      <ButtonNav items={items} />
    </div>
  );
};

export default TitleTemplate;
