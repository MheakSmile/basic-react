import {Container,Form,Button,Row,Col, FormGroup} from 'react-bootstrap'
import { useState } from 'react'
const axios = require('axios').default

const FormMultiple =()=>{
     const [NN, setNN] = useState(0)
     const [X1, setX1] = useState({})
     const [X2, setX2] = useState({})
     const [X3, setX3] = useState({})
     const [Y, setY] = useState({})
     const [result, setResult] = useState(null)
    return(
     <div>
             <Container className="mt-5 p-4 rounded bg-light">
                <h2>Multiple Regression</h2>
                <Form>
                    <Form.Group as={Row} controlId="XY">
                        <Form.Label column sm="2">
                            Enter [x1,x2,x3,y]:
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
                            x1 :
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
                                            setX1({
                                                ...X1,
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
                            x2 :
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
                                            setX2({
                                                ...X2,
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
                            x3 :
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
                                            setX3({
                                                ...X3,
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
                    <Button
                        block
                        type="button"
                        onClick={async () => {
                            const res = await axios.post(
                                'http://localhost:8080/api/v1/regression/multiple',
                                { X1,X2,X3, Y}
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

export default FormMultiple