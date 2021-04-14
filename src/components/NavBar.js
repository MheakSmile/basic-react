  
import {  Nav, Navbar,NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar  className="bg-dark">
            <Navbar.Brand href="#Numerical Method" className="text-white">Numerical Method</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/home" className="nav-link text-white">
                        Home
                    </NavLink>
                    <NavDropdown  title="Root of Equations" id="basic-nav-dropdown" className="bg-light">
                     <NavLink to="/Bisection" className="nav-link">
                        Bisection
                    </NavLink>
                    <NavLink to="/Falseposition" className="nav-link bg-dark text-white" >
                        FalsePosition
                    </NavLink>
                    <NavLink to="/NewtonRaphson" className="nav-link">
                        NewtonRaphson
                    </NavLink>
                    <NavLink to="/OnepointIteration" className="nav-link bg-dark text-white">
                        Onepoint Iteration
                    </NavLink>
                    <NavLink to="/Secant" className="nav-link">
                        Secant Method
                    </NavLink>
                    </NavDropdown>
                    <NavDropdown title="Linear Algebraic Equations" id="basic-nav-dropdown" className="bg-light">
                     <NavLink to="/Cramer" className="nav-link ">
                        Cramer's Rule
                    </NavLink>
                    <NavLink to="/GaussElimination" className="nav-link bg-dark text-white">
                        GaussElimination Method
                    </NavLink>
                    <NavLink to="/GaussJordan" className="nav-link">
                        GaussJordan Method
                    </NavLink>
                    <NavLink to="/LUdecomposition" className="nav-link bg-dark text-white">
                        LU Decomposition Method
                    </NavLink>
                    <NavLink to="/JacobiIteration" className="nav-link">
                        Jacobi Iteration Method
                    </NavLink>
                    <NavLink to="/GaussSeidel" className="nav-link bg-dark text-white">
                        GaussSeidel Method
                    </NavLink>
                    <NavLink to="/ConjugateGradient" className="nav-link">
                        Conjugate Gradient Method
                    </NavLink>
                    </NavDropdown>
                    <NavDropdown title="Interpolation & Extrapolation" id="basic-nav-dropdown" className="bg-light">
                    <NavLink to="/Linear" className="nav-link">
                        Linear
                    </NavLink>
                    <NavLink to="/Quadratic" className="nav-link bg-dark text-white">
                        Quadratic
                    </NavLink>
                    <NavLink to="/Polynomial" className="nav-link">
                        Polynomial
                    </NavLink>
                    </NavDropdown>
                    <NavDropdown title="Least-Squares Regresstion" id="basic-nav-dropdown" className="bg-light">
                    <NavLink to="/Linearregresstion" className="nav-link">
                        Linear Regression
                    </NavLink>
                    <NavLink to="/Polynomialregresstion" className="nav-link bg-dark text-white">
                        Polynomial Regression
                    </NavLink>
                    <NavLink to="/Multipleregresstion" className="nav-link">
                        Multiple Regression
                    </NavLink>
                    </NavDropdown>
                    {/* <NavLink to="/login" className="nav-link">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="nav-link">
                        Register
                    </NavLink>
                    <NavLink to="/counter" className="nav-link">
                        Counter
                    </NavLink>
                    <NavLink to="/graph" className="nav-link">
                        Graph
                    </NavLink> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar