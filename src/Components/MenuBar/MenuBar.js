import React, {Component} from 'react';
import './MenuBar.css'

class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: ["About", "Examples", "Experience", "Contact"]
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(event){
        this.props.scroll(event.target.id)
    }

    render() {
        let count = 0
        return (
            <nav className="MenuBar">
                <div id="Home" onClick={this.handleScroll} className="Home">
                    <a>Aidan Gallagher</a>
                </div>
                <div className="Pages">
                    {this.state.pages.map(name => {
                        return (
                            <div id={name} onClick={this.handleScroll} className="MenuItem" key={count++}>
                                <a>{name}</a>
                            </div>
                        )
                    })}
                </div>
            </nav>
        )
    }
}

export default MenuBar