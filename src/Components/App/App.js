import React, {Component} from 'react'
import './App.css'
import MenuBar from '../MenuBar/MenuBar.js'
import Main from '../Main/Main.js'
import About from '../About/About.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.scroll = this.scroll.bind(this)
    }

    scroll(ref) {
        this.refs[ref].scrollIntoView({behavior: 'smooth'})
    }

    render() {
        return (
            <div>
                <MenuBar scroll={this.scroll}/>
                <div ref="Home">
                    <Main scroll={this.scroll}/>
                </div>
                <div ref="About">
                    <About scroll={this.scroll}/>
                </div>
            </div>
        )
    }
}

export default App;
