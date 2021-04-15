import {Container,Form,Button,Row,Col,Table} from 'react-bootstrap'
import { useState } from 'react'
import React from 'react'
import {Line} from 'react-chartjs-2'
const axios = require('axios').default


const FormNewtonRaphon =()=>{
     const [data, setData] = useState({
        x: 0,
        eq: '(x^2)-7',
        error: 0.000001,
    })
    const [results, setResults] = useState(null)
    const baba = {
        labels: [],
        datasets: [
            {
                label: 'NewtonRaphon',
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
                <h2>Newton Raphson Method</h2>
                <Form>
                    <Form.Group as={Row} controlId="Equation">
                        <Form.Label column sm="2">
                            Equation :
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                               type="text"
                                placeholder="equation"
                                 onChange={(e) => {
                                    setData({
                                        ...data,
                                        eq: (e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="X">
                        <Form.Label column sm="2">
                            X  :
                        </Form.Label>
                        <Col sm="3">
                            <Form.Control
                                type="number"
                                placeholder="X "
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x: parseFloat(e.target.value),
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
                                        'http://localhost:8080/api/v1/root/newtonraphon',
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
                                    <th>XI</th>
                                    <th>FX1</th>
                                    <th>FX2</th>
                                    <th>X</th>
                                    <th>ER</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((g) => (
                                    <tr key={g.iteration}>
                                        <td>{g.iteration}</td>
                                        <td>{g.xi}</td>
                                        <td>{g.fx1}</td>
                                        <td>{g.fx2}</td>
                                        <td>{g.x}</td>
                                        <td>{g.err}</td>
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

export default FormNewtonRaphon