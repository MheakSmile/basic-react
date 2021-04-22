import {Container,Form,Button,Row,Col,Table} from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import {Line} from 'react-chartjs-2'
const axios = require('axios').default

const FormFalsePosition =()=>{
        const [data, setData] = useState({
        xl: 0,
        xr: 0,
        eq: '(x^4)-13',
        error: 0.000001,
    })
    const [results, setResults] = useState(null)
    const baba = {
        labels: [],
        datasets: [
            {
                label: 'Falseposition',
                data: [],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }
    results !== null &&
        results.map(
            (r) => (
                baba.labels.push(r.x1),
                baba.datasets[0].data.push(r.fx1)
            )
        )
    return(
     <div>
             <Container className="mt-5 p-4 rounded bg-light">
                <h2>False-Position Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                               type="text"
                                placeholder="(x^4)-13"
                                 onChange={(e) => {
                                    setData({
                                        ...data,
                                        eq: (e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Form.Label column sm="2">
                            XL :
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="number"
                                placeholder="XL"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        xl: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XR">
                        <Form.Label column sm="2">
                            XR :
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="number"
                                placeholder="XR"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        xr: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Error">
                        <Form.Label column sm="2">
                            Error :
                        </Form.Label>
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
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button
                                type="button"
                                onClick={async () => {
                                    const res = await axios.post(
                                        'http://localhost:8080/api/v1/root/falseposition',
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
                        </Col>
                    </Form.Group>
                    {results !== null && (
                        <Table  bordered hover>
                            <thead>
                                <tr>
                                    <th>Iteration</th>
                                    <th>XL</th>
                                    <th>XR</th>
                                    <th>X1</th>
                                    <th>ER</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((g) => (
                                    <tr key={g.iteration}>
                                        <td>{g.iteration}</td>
                                        <td>{g.xl}</td>
                                        <td>{g.xr}</td>
                                        <td>{g.x1}</td>
                                        <td>{g.er}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Form>
                <Line data={baba} width={'20%'} height={'10%'}/>
            </Container>
        </div>
)   
}

export default FormFalsePosition