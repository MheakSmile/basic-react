import LoginPages from "./pages/LoginPages";
import NavBar from "./components/NavBar";
import RegisterPages from "./pages/RegisterPages";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import DynamicPage from "./pages/DynamicPage";


function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path={'/login'}>
                    <LoginPages />
                </Route>
                <Route path={'/Register'}>
                    <RegisterPages/>
                </Route>
                <Route path={'/:name'}>
                    <DynamicPage/>
                </Route>             
            </Switch>
            </Router>
    )
}

export default App
