import React from 'react';
import styled from "styled-components";
import "./Level.css";


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
                    <h1>{this.props.name}</h1>
                </div>

            </div>
        )
    }
}