import Game from "./Game"
import {modes} from "./Modules.js"
import "./App.css"
import styled from "styled-components";
import React from "react";
// import Level from "./Level"

const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 0.25rem;
    margin: .5rem 0rem;
    cursor: pointer;
`;

class App extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            menu: false
        }
        this.mainMenu = this.mainMenu.bind(this);
        this.selectLevel = this.selectLevel.bind(this);
    }

    mainMenu() {
        this.setState({
            menu: false
        });
    }

    selectLevel(ind) {
        this.setState({
            menu: {
                name: modes[ind][2],
                mode: modes[ind],
                level: false
            }
        })
    }

    play(levelno) {
        this.setState({
            menu: {
                name: this.state.menu.name,
                mode: this.state.menu.mode,
                level: levelno
            }
        })
    }

    render() {
        if (!this.state.menu) {
            return (
                <div className="Menu">
                <div className="Header">
                    <h1>Speedcalc</h1>
                </div>
                {modes.map((n, index) => (
                    <div key={index} className="grid-container">
                        <Button key={index} className="grid-item" onClick={() => this.selectLevel(index)}>{n[2]}</Button>
                    </div>
                ))}
                </div>
            )
        } else if (!this.state.menu.level) {
            let selections = [];
            for (let i = 0; i < this.state.menu.mode[1]; i++) {
                selections.push(i + 1);
            }
            return ( <div className="Menu">
                <div className="Header">
                    <h2>{this.state.menu.name}</h2>
                    <Button onClick={() => this.mainMenu()}>Back</Button><br/>
                    <div className="grid-container">
                        {selections.map((n, index) => (
                            <Button key={index} className="grid-item" onClick={() => this.play(n)}>Level {n}</Button>
                        ))}
                    </div>
                </div>
            </div>
            );
        }
        else {
            return (
                <Game name={this.state.menu.mode[2]} back={this.mainMenu} problemnum={20} level={{ generator: this.state.menu.mode[0], number: this.state.menu.level, final: this.state.menu.mode[1] }}/>
            );
        }
    }
}

export default App;
