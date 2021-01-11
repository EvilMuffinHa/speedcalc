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
        let levelno = this.props.level.number;
        let problems = [];
        for (let i = 0; i < this.props.problemnum; i ++ ) {
            problems.push(i+1);
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
                    {problems.map((n, index) => (
                        // <p key={index} dangerouslySetInnerHTML={{__html: n.toString() + ". &nbsp;&nbsp;" + katex.renderToString(this.props.level.generator(levelno).question, latexOptions)}}></p>
                        <p key={index}>{n.toString() + "."}&nbsp;&nbsp;<InlineMath>{this.props.level.generator(levelno).question}</InlineMath></p>
                    ))}</div>
                <div className="sep"></div>
                <div className="Answers">
                    
                    {problems.map((n, index) => (
                        <p key={index}>{n.toString() + "."}&nbsp;&nbsp;<InlineMath>{this.props.level.generator(levelno).solution}</InlineMath></p>
                        ))}</div>
            </div>
        )
    }

}