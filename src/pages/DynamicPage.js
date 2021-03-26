import {useParams} from 'react-router-dom'
const DynamicPage = () => {
    const{name,surname} = useParams()
    return(   <div>
            <h1>Name : {name}</h1>
            <h1>SurName : {surname}</h1>
        </div>
    )
}
export default DynamicPage