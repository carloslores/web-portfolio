import "./CardCode.scss";

import React from "react";
import styled from "styled-components";

const CardCode = (props) => {
  const { left, rigth } = props;
  return (
    <StyledWrapper>
      <div className={`card grow ${left ? "left-absolute" : "rigth-absolute"}`}>
        <div className="tools">
          <div className="circle">
            <span className="red box" />
          </div>
          <div className="circle">
            <span className="yellow box" />
          </div>
          <div className="circle">
            <span className="green box" />
          </div>
        </div>
        <div className="card__content"></div>
        <div className="code">
          {left && (
            <pre>
              <span style={{ color: "#9e28ab" }}>if </span>
              (awake)<span style={{ color: "#9e28ab" }}> {"{"}</span>
              <span style={{ color: "rgb(219 203 76)", marginLeft: "5px" }}>
                <br /> code();
              </span>
              <br />
              <span style={{ color: "#9e28ab" }}>{"}"} else if </span>
              (tired)
              <span style={{ color: "#9e28ab" }}> {"{"}</span>
              <span style={{ color: "rgb(219 203 76)", marginLeft: "5px" }}>
                <br /> drinkCofee();
              </span>
              <br />
              <span style={{ color: "#9e28ab" }}>{"}"}</span>
            </pre>
          )}
          {rigth && (
            <pre>
              <span style={{ color: "#9e28ab" }}>if </span>
              (sad() === true)<span style={{ color: "#9e28ab" }}> {"{"}</span>
              <span style={{ color: "rgb(219 203 76)", marginLeft: "5px" }}>
                <br /> sad.stop();
                <br /> beAweseme()
              </span>
              <br />
              <span style={{ color: "#9e28ab" }}>{"}"} </span>
            </pre>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 360px;
    height: 254px;
    margin: 0 auto;
    margin-top: 4rem;
    background-color: #0115224d;
    border-radius: 8px;
    z-index: 1;
    mask-image: linear-gradient(#00000054 80%, transparent);
    position: absolute;
  }

  .left-absolute {
    left: 16%;
    bottom: 7%;
  }
  .rigth-absolute {
    left: 27%;
    top: 15%;
  }

  .tools {
    display: flex;
    align-items: center;
    padding: 9px;
  }

  .circle {
    padding: 0 4px;
  }

  .box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }
`;

export default CardCode;
