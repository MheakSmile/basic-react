// import LoginPages from "./pages/LoginPages";
// import RegisterPages from "./pages/RegisterPages";
// import CounterPage from './pages/CounterPage'
// import GraphPage from './pages/GraphPage'
//import DynamicPage from "./pages/DynamicPage";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ConjuPage from './pages/Linear/ConjuPage';
import CramerPage from './pages/Linear/CramerPage';
import GaussEliPage from './pages/Linear/GaussEliPage';
import GaussjorPage from './pages/Linear/GaussjorPage';
import GaussSeiPage from './pages/Linear/GaussSeiPage';
import JacobiPage from './pages/Linear/JacobiPage';
import LuPage from './pages/Linear/LuPage';
import LinearPage from './pages/Regresstion/LinearPage';
import MultiplePage from './pages/Regresstion/MultiplePage';
import PolynomialPage from './pages/Regresstion/PolynomialPage';
import BisectionPage from "./pages/RootsofEquations/BisectionPage";
import FalsePositionPage from './pages/RootsofEquations/FalsePositionPage';
import NewtonRaphonPage from './pages/RootsofEquations/NewtonRaphonPage';
import OnePointPage from './pages/RootsofEquations/OnePointPage';
import SecantPage from './pages/RootsofEquations/SecantPage';

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                 <Route path={'/home'}>
                    <HomePage />
                </Route>
                <Route path={'/Bisection'}>
                    <BisectionPage />
                </Route>
                <Route path={'/Falseposition'}>
                    <FalsePositionPage/>
                </Route>
                <Route path={'/NewtonRaphson'}>
                    <NewtonRaphonPage />
                </Route>
                <Route path={'/OnepointIteration'}>
                    <OnePointPage />
                </Route>
                <Route path={'/Secant'}>
                    <SecantPage />
                </Route>
                 <Route path={'/Cramer'}>
                    <CramerPage />
                </Route>
                 <Route path={'/GaussElimination'}>
                    <GaussEliPage/>
                </Route>
                <Route path={'/GaussJordan'}>
                    <GaussjorPage />
                </Route>
                <Route path={'/LUdecomposition'}>
                    <LuPage/>
                </Route>
                <Route path={'/JacobiIteration'}>
                    <JacobiPage/>
                </Route>
                <Route path={'/GaussSeidel'}>
                    <GaussSeiPage/>
                </Route>
                <Route path={'/ConjugateGradient'}>
                    <ConjuPage/>
                </Route>
                <Route path={'/Linearregresstion'}>
                    <LinearPage/>
                </Route>
                <Route path={'/Polynomialregresstion'}>
                    <PolynomialPage/>
                </Route>
                <Route path={'/Multipleregresstion'}>
                    <MultiplePage/>
                </Route>
                {/* <Route path={'/login'}>
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
                </Route>              */}
            </Switch>
            </Router>
    )
}

export default App
