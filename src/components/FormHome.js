import {Container} from 'react-bootstrap'
import rock from '../images/rock.gif'
const FormHome =()=>{
        return (
        <div>
        <Container className="mt-5 p-4 rounded bg-light">
                     <h1 align="center">Home Page</h1>
                     <br />
                     <h2 align="center">จิรวัฒน์ เผือดจันทึก</h2>
                     <h2 align="center">6104062630263</h2>
                     <center>
                     <img src={rock} alt="" className=" rounded img-fluid"/>
                     </center>
        </Container>
        </div>
        )   
}

export default FormHome