import './App.scss';
import {Meeting} from "./component/meeting/Meeting"
import {Registration} from "./component/registration/Registration"
import "./index.css"

function App() {
    return (
        < div className = "App" >
        <Meeting/>
        < Registration/>

        </div>
)
    ;
}

export default App;
