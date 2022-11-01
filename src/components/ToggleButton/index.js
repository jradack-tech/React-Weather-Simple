
import React from "react";
import styled from "styled-components";

const ToggleButton = ({ toggleTheme }) => {
    return (
        <Container>
            <ToggleSwitch>
                <input type="checkbox" className="checkbox"
                    id={"checkbox"} onChange={() => toggleTheme()} />
                <ToggleLabel htmlFor={"checkbox"} className="label">
                    <span className="inner" />
                    <span className="switch" />
                </ToggleLabel>
            </ToggleSwitch>
        </Container>
    );
};

const Container = styled.div`
    text-align: center;
    position: absolute;
    top: 15px;
    right: 30px;
`;

const ToggleSwitch = styled.div`
    position: relative;
    width: 85px;
    display: inline-block;
    text-align: left;
    top: 8px;
    .checkbox {
        display: none;
    }
    .checkbox:checked + .label .inner {
        margin-left: 0;
    }
    .checkbox:checked + .label .switch {
        right: 0px;
    }
`;

const ToggleLabel = styled.label`
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
    .inner {
        display: block;
        width: 200%;
        margin-left: -100%;
        transition: margin 0.3s ease-in 0s;
        background: #1DE9B6;
    }
    .inner:before,
    .inner:after {
        float: left;
        width: 50%;
        height: 36px;
        padding: 0;
        line-height: 36px;
        color: #fff;
        font-weight: bold;
        box-sizing: border-box;
    }
    .inner:before {
        content: "Light";
        padding-left: 10px;
        background-color: #fff;
        color: #0d2f45;
    }
    .inner:after {
        content: "Dark";
        padding-right: 10px;
        background-color: #0d2f45;
        color: #fff;
        text-align: right;
    }
    .switch {
        display: block;
        width: 24px;
        margin: 5px;
        background: #1DE9B6;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 50px;
        border: 0 solid #bbb;
        border-radius: 20px;
        transition: all 0.3s ease-in 0s;
    }
`;

export default ToggleButton;