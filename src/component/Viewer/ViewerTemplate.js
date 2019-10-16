import React, { Component } from "react";
import styled from "styled-components";
import { Player } from "video-react";

const w = e(window.innerWidth - 350);
const h = window.innerHeight;
function e(c) {
  const b = (c * 9) / 16;
  if (window.innerHeight - 100 < b) {
    return ((window.innerHeight - 150) * 16) / 9;
  } else {
    console.log(window.innerHeight);
    return c;
  }
}

const Square = styled.div`
  background: black;
  justify-content: center;
  margin: 1.5rem;
`;

class ViewerTemplate extends Component {
  state = { width: w, height: w * (9 / 16) };
  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  resize = () => {
    this.setState({
      width: window.innerWidth - 350,
      height: window.innerHeight
    });
  };
  render() {
    console.log("sdddd" + this.state.width);
    return (
      <Square
        style={{ height: this.state.width * (9 / 16), width: this.state.width }}
      />
    );
  }
}

export default ViewerTemplate;
