import {Container,Form,Button,Row,Col,Table} from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import {Line} from 'react-chartjs-2'
const axios = require('axios').default


const FormSecant =()=>{
         const [data, setData] = useState({
        x0: 0,
        x1:0,
        eq: '(x^2)-7',
        error: 0.00001,
    })
    const [results, setResults] = useState(null)
    const baba = {
        labels: [],
        datasets: [
            {
                label: 'Secant Method',
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
                baba.labels.push(r.xi),
                baba.datasets[0].data.push(r.fxi)
            )
        )
    return(
     <div>
              <Container className="mt-5 p-4 rounded bg-light">
                <h2>Secant Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                               type="text"
                                placeholder="(x^2)-7"
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
                            X0 :
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="number"
                                placeholder="X0"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x0: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Form.Label column sm="2">
                            X1 :
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="number"
                                placeholder="X1"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x1: parseFloat(e.target.value),
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
                                        'http://localhost:8080/api/v1/root/secant',
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
                                    <th>X0</th>
                                    <th>X1</th>
                                    <th>FX1</th>
                                    <th>FX2</th>
                                    <th>DELTAX</th>
                                    <th>XI</th>
                                    <th>ER</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((g) => (
                                    <tr key={g.iteration}>
                                        <td>{g.iteration}</td>
                                        <td>{g.x0}</td>
                                        <td>{g.x1}</td>
                                        <td>{g.fx0}</td>
                                        <td>{g.fx1}</td>
                                         <td>{g.deltax}</td>
                                        <td>{g.xi}</td>
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

export default FormSecant