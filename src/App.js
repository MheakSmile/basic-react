import LoginPages from "./pages/LoginPages";
import NavBar from "./components/NavBar";
import RegisterPages from "./pages/RegisterPages";
import CounterPage from './pages/CounterPage'
import GraphPage from './pages/GraphPage'
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
                <Route path={'/counter'}>
                    <CounterPage />
                </Route>
                <Route path={'/graph'}>
                    <GraphPage />
                </Route>
                <Route path={'/:name/:surname'}>
                    <DynamicPage/>
                </Route>             
            </Switch>
            </Router>
    )
}

export default App
