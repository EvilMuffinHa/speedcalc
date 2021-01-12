import React from 'react';
import styled from "styled-components";
import "./Level.css";


// eslint-disable-next-line no-unused-vars
const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 0.25rem;
    margin: .5rem 0rem;
    cursor: pointer;
`;

export default class Level extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <div className="Level">
                <div className="Header">
                    {/* eslint-disable-next-line react/prop-types */}
                    <h1>{this.props.name}</h1>
                </div>

            </div>
        );
    }
}