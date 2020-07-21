import React, { Component } from 'react'
import Iframe from 'react-iframe'

class Iframe_pie extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <Iframe url="http://localhost:3001/pie-chart"
                    width="450px"
                    height="400px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </>
        )
    }
}

export default Iframe_pie