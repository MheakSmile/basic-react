import {Container,Form,Button,Row,Col,Table} from 'react-bootstrap'
import { useState } from 'react'
const axios = require('axios').default

const FormJacobi =()=>{
     const [data, setData] = useState({
        a1: 0,
        a2: 0,
        a3: 0,
        a4: 0,
        a5: 0,
        a6: 0,
        a7: 0,
        a8: 0,
        a9: 0,
        b1: 0,
        b2: 0,
        b3: 0,
        x1: 0,
        x2: 0,
        x3: 0,
        error: 0,
    })
    const [results, setResults] = useState(null)
    return(
     <div>       
         <Container className="mt-5 p-4 rounded bg-light">
                <h2>Jacobi Iteration Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="A">                                    
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[1,1]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[1,2]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[1,3]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="A">
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[2,1]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a4: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[2,2]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a5: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[2,3]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a6: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="A">
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[3,1]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a7: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[3,2]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a8: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="A[3,3]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a9: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>                       
                    </Form.Group>
                    <h2>Vector B</h2>
                    <Form.Group as={Row} controlId="Vector B">
                        <Col>
                         <Form.Control
                                type="number"
                                placeholder="B[1]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                         <Col>
                         <Form.Control
                                type="number"
                                placeholder="B[2]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                         <Col>
                         <Form.Control
                                type="number"
                                placeholder="B[3]"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <h2>X</h2>
                    <Form.Group as={Row} controlId="X">
                        <Col>
                         <Form.Control
                                type="number"
                                placeholder="x1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                         <Form.Control
                                type="number"
                                placeholder="x2"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                         <Form.Control
                                type="number"
                                placeholder="x3"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>

                    </Form.Group>
                    <h2>Error</h2>
                    <Form.Group as={Row}>
                        <Col sm="3">
                            <Form.Control
                                type="number"
                                placeholder="Error"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        error: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>

                           <Button
                            block
                                type="button"
                                onClick={async () => {
                                    const res = await axios.post(
                                        'http://localhost:8080/api/v1/linear/jacobi',
                                        data
                                    )
                                    console.log(res)
                                    setResults(
                                        JSON.parse(res.request.response).data
                                    )
                                }}
                            >
                                Calculate
                            </Button>
                        
                   
                    
                    {results !== null && (
                        <Table  bordered hover >
                            <thead>
                                <tr>
                                    <th>Iteration</th>
                                    <th>X1</th>
                                    <th>X2</th>
                                    <th>X3</th>
                                    <th>Error1</th>
                                    <th>Error2</th>
                                    <th>Error3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((g) => (
                                    <tr key={g.iteration}>
                                        <td>{g.iteration}</td>
                                        <td>{g.x1}</td>
                                        <td>{g.x2}</td>
                                        <td>{g.x3}</td>
                                        <td>{g.e1}</td>
                                        <td>{g.e2}</td>
                                        <td>{g.e3}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Form>
            </Container>

        </div>
)   
}

export default FormJacobi