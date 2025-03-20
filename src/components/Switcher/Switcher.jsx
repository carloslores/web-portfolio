import React from "react";
import styled from "styled-components";
import { useGlobal } from "../../contexts/GlobalContext";

const Switcher = () => {
  const { toggleDarkMode } = useGlobal();
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #223243;
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: #223243;
    box-shadow: inset 2px -2px 0 1.8px #fff;
    transition: 0.4s;
    animation: anima1 0.3s linear;
  }

  @keyframes anima1 {
    0% {
      transform: translateX(1.5em);
    }

    80% {
      transform: translateX(-0.3em);
    }

    100% {
      transform: translateX(0em);
    }
  }

  .switch input:checked + .slider:before {
    background-color: yellow;
    box-shadow: none;
    transform: translateX(1.5em);
    animation: anima 0.3s linear;
  }

  @keyframes anima {
    0% {
      transform: translateX(0px);
    }

    80% {
      transform: translateX(1.6em);
    }

    100% {
      transform: translateX(1.4em);
    }
  }
`;

export default Switcher;
