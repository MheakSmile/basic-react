import {Container,Form,Button,Row,Col, FormGroup,} from 'react-bootstrap'
import { useState } from 'react'
const axios = require('axios').default

const FormNewtondivied =()=>{
     const [NN, setNN] = useState(0)
     const [Nindex, setNindex] = useState(0)
     const [Xw, setXw] = useState(0)
     const [X, setX] = useState({})
     const [Y, setY] = useState({})
     const [Nin, setNin] = useState({})
     const [result, setResult] = useState(null)
    return(
     <div>
             <Container className="mt-5 p-4 rounded bg-light">
                <h2>Newton's divied-differences</h2>
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
                    <Form.Group as={Row} controlId="Index">
                        <Form.Label column sm="2">
                            Enter [Index]:
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control
                                type="number"
                                step="1"
                                onChange={(e) => {
                                    setNindex(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group>
                     <Form.Group as={Row}>
                              <Form.Label column sm="2">
                            Index :
                        </Form.Label>
                        {Nindex > 0 &&
                            Nindex<= 10 &&
                            Array.from(Array(Nindex), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`y${i}`}
                                        onChange={(e) => {
                                            setNin({
                                                ...Nin,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row} controlId="predition">
                        <Form.Label column sm="2">
                             F(x):
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setXw(parseInt(e.target.value))
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
                                'http://localhost:8080/api/v1/interpolation/newton',
                                { X, Y,Nin, Xw }
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
                                     Ans ={JSON.stringify(result.ans)}
                             </Form.Label>
                             </FormGroup>
                     </Container>
             )}
        </div>
)   
}

export default FormNewtondivied