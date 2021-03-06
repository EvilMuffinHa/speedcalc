import React from 'react';
import Timer from './Timer';
import './Game.css';
import styled from "styled-components";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';



const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 0.25rem;
    margin: .5rem 0rem;
    cursor: pointer;
`;

export default class Game extends React.Component {

    render() {
        /* eslint-disable react/prop-types */
        let levelno = this.props.level.number;
        let problems = [];
        let sets = [];
        for (let i = 0; i < this.props.problemnum; i ++ ) {
            problems.push(i+1);
            sets.push(this.props.level.generator(levelno));
        }
        return (
            <div className="Game">
                <div className="Header"><h1>{this.props.name + ": Level " + levelno.toString()}</h1></div>
                <div className="Nav">
                    <Button onClick={this.props.back}>Main Menu</Button>
                    <p>Scroll down for answers</p>
                </div>
                <Timer />
                <div className="Problems">
                    {sets.map((n, index) => (
                        // <p key={index} dangerouslySetInnerHTML={{__html: n.toString() + ". &nbsp;&nbsp;" + katex.renderToString(this.props.level.generator(levelno).question, latexOptions)}}></p>
                        <p key={index}>{(index + 1).toString() + "."}&nbsp;&nbsp;<InlineMath>{n.question}</InlineMath></p>
                    ))}</div>
                <div className="sep"></div>
                <div className="Answers">
                    
                    {sets.map((n, index) => (
                        <p key={index}>{(index + 1).toString() + "."}&nbsp;&nbsp;<InlineMath>{n.solution}</InlineMath></p>
                        ))}</div>
            </div>
        );
    }

}