import { Component } from 'react';
import '../bootstrap';
import './Example';
import ReactDOM  from 'react-dom';
import Home from './Home';

class App extends Component{
    render() {
        return (
        <Home/>
        );
    }
}

export default App;

if(document.getElementById("app")){
    ReactDOM.render(<App />,document.getElementById("app"))
}

