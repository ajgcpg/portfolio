import React, {Component} from 'react';
import './Main.css'
import {TweenMax} from 'gsap'
import avatar from './avatar.jpg'
import Arrow from "../Arrow/Arrow";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrowHover: "Arrow"
        }
        this.load = this.load.bind(this)
        this.arrow = this.arrow.bind(this)
    }

    arrow() {
        if (this.state.arrowHover === "Arrow") {
            this.setState({
                arrowHover: "ArrowHover"
            })
        }
        else {
            this.setState({
                arrowHover: "Arrow"
            })
        }
    }

    load(event) {
        TweenMax.from(event.target, 1.5, {opacity: 0, height: 0, width: 0})
    }

    render() {
        return (
            <div className="Main">
                <div className="Content">
                    <img onLoad={this.load} className="Avatar" src={avatar} alt="Avatar"/>
                    <h1 onLoad={this.load}>Aidan Gallagher</h1>
                    <h3 onLoad={this.load}>Software Developer / Front-End Specialist</h3>
                    <p onLoad={this.load}>ReactJS | Python | Java</p>
                </div>
                <Arrow target="About" scroll={this.props.scroll}/>
            </div>
        )
    }
}

export default Main