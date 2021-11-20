import React, { Component } from 'react'

export default class Images extends Component {
    constructor(props) {
        super(props);
        this.state = { title: " ", interval: null }
    }
    componentDidMount() {

        this.setState(
            {
                interval: setInterval(() => {
                    console.log("Image is Mounted / component  is placed");
                }, 1000)
            }
        )
    }
    componentWillUnmount() {
        console.log("Image/ component is unmounted / removed");
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" width="700px" height="400px" />
            </div>
        )
    }
}
