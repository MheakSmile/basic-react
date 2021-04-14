import {Container,Form,Button,Row,Col, FormGroup} from 'react-bootstrap'
import { useState } from 'react'
const axios = require('axios').default

const FormPolynomial =()=>{
    const [NN, setNN] = useState(0)
     const [Order, setOrder] = useState(0)
     const [X, setX] = useState({})
     const [Y, setY] = useState({})
     const [result, setResult] = useState(null)
    return(
     <div>
             <Container className="mt-5 p-4 rounded bg-light">
                <h2>Polynomial Regression</h2>
                <Form>
                    <Form.Group as={Row} controlId="XY">
                        <Form.Label column sm="2">
                            Enter [x,y]:
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setNN(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row}>
                            <Form.Label column sm="2">
                            x :
                        </Form.Label>
                        {NN > 0 &&
                            NN <= 10 &&
                            Array.from(Array(NN), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`x${i}`}
                                        onChange={(e) => {
                                            setX({
                                                ...X,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row}>
                              <Form.Label column sm="2">
                            y :
                        </Form.Label>
                        {NN > 0 &&
                            NN <= 10 &&
                            Array.from(Array(NN), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`y${i}`}
                                        onChange={(e) => {
                                            setY({
                                                ...Y,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row} controlId="Order">
                        <Form.Label column sm="2">
                             Order:
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setOrder(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Button
                        block
                        type="button"
                        onClick={async () => {
                            const res = await axios.post(
                                'http://localhost:8080/api/v1/regression/polynomial',
                                { X, Y, Order }
                            )
                            setResult(JSON.parse(res.request.response))
                        }}
                    >
                        Calculate
                    </Button>
                </Form>      
             </Container>
             {result != null&&(
                     <Container className="mt-5 p-4 round bg-light">
                         <FormGroup>
                             <Form.Label sm="2">
                                     Equation {JSON.stringify(result.data.string)}
                             </Form.Label>
                             </FormGroup>
                             <FormGroup>
                             <Form.Label sm="2">
                                     Ans = {JSON.stringify(result.result[1])}
                             </Form.Label>
                             </FormGroup>
                     </Container>
             )}
        </div>
)   
}

export default FormPolynomial