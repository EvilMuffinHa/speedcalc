import React from 'react';
import './Timer.css';
import styled from "styled-components";

/*
const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 10px;
    padding: 5px 30px;
    border-radius: 2.5px;
    margin: 5px 0px;
    cursor: pointer;
`;
*/
const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 3rem;
    border-radius: 0.25rem;
    margin: .5rem 0rem;
    cursor: pointer;
`;

export default class Timer extends React.Component {
    constructor(p) {
        super(p);
        this.state = { ms: 0 };
    }

    tick() {
        this.setState(state => ({
            ms: state.ms + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    reset() {
        // eslint-disable-next-line no-unused-vars
        this.setState(state => ({
            ms: 0
        }));
    }

    stop() {
        clearInterval(this.interval);
    }

    start() {
        this.interval = setInterval(() => this.tick(), 1);
    }



    render() {
        let ms = this.state.ms;
        let h = Math.floor(ms / (60*60*1000));
        ms -= h*60*60*1000;
        let m = Math.floor(ms / (60*1000));
        ms -= m*60*1000;
        let s = Math.floor(ms / 1000);
        ms -= s*1000;

        return (
            <div className="Timer">
                <p>Timer: {h}:{m}:{s}.{ms}</p>
                <div className="Buttons">
                    <Button onClick={() => this.stop()}>Stop</Button> 
                    <Button onClick={() => this.reset()}>Reset</Button>
                    <Button onClick={() => this.start()}>Start</Button>
                </div>
            </div>
        );
    }
}