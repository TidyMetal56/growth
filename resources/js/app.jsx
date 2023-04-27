import './bootstrap';
import './components/Example';
import ReactDOM  from 'react-dom/client';
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('example').render(
    <Home/>
))

if(document.getElementById("app")) {
    ReactDOM.render(<App/>, document.getElementById("app"));
}

