import React from 'react'
import Images from './Components/Images';
// function App() {
//     return (
//         <div>Hello React World from App - File</div>
//     );
// }
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "Hello React World-1 ", isShow: false }
        // for normal function or method -handleClick
        this.handleClick = this.handleClick.bind(this);
        console.log("constructor called..");
    }
    // handleClick = () => {
    //     this.setState({ isShow: !this.state.isShow })
    // }

    // if you dont want to use Arrow function then need to bind "handleClick " in constructor
    handleClick() {
        this.setState({ isShow: !this.state.isShow })
        this.setState({ title: "Hello React world-2" });
    }
    componentDidUpdate() {

        console.log("Component Updated ...");
    }

    render() {
        console.log("App render");
        return (
            <div>
                <div className="d-flex flex-column">
                    <div className="mx-auto">{this.state.title}</div>
                    <div className="mx-auto my-4">
                        {/* <button className=" btn btn-primary" onClick={() => this.setState({ isShow: !this.state.isShow })}>Click ME</button> */}
                        <button className="btn btn-primary" onClick={this.handleClick}>Click ME</button>
                    </div>
                    {
                        this.state.isShow ? <Images /> : null
                    }
                </div>
            </div>
        );
    }
}

export default App;