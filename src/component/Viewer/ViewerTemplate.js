import React, { Component } from "react";
import styled from "styled-components";
import { Player } from "video-react";
import "./ViewerTemplate.scss";
const initSize = sizeCheck(window.innerWidth - 350);

function sizeCheck(adaptedWidth) {
  const height = (adaptedWidth * 9) / 16;
  const adaptedHeight = window.innerHeight - 150;
  if (adaptedWidth < 640) {
    return 640;
  } else if (adaptedHeight < height) {
    console.log(adaptedHeight);
    adaptedWidth = (adaptedHeight * 16) / 9;
    if (adaptedHeight < 360) {
      return 640;
    }
    return adaptedWidth;
  } else {
    return adaptedWidth;
  }
}

const Square = styled.div`
  justify-content: center;
  margin: 1.5rem;
`;

class ViewerTemplate extends Component {
  state = { width: initSize };
  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  resize = () => {
    this.setState({
      width: sizeCheck(window.innerWidth - 350)
    });
  };
  render() {
    console.log("sdddd" + this.state.width);
    return (
      <Square>
        <Player
          playsInline
          height={this.state.width * (9 / 16)}
          width={this.state.width}
          fluid={false}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
      </Square>
    );
  }
}

export default ViewerTemplate;
