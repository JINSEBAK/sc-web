import { useState } from "react";

const { default: Icon } = require("./Icon");

const HomeButton = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <a
      href="/main"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Icon name={isMouseOver ? "home-hover" : "home"} size={50} />
    </a>
  );
};

export default HomeButton;
