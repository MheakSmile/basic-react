import {useParams} from 'react-router-dom'
const DynamicPage = () => {
    const{name} = useParams()
    return<h1>Dynamic: {name}</h1>
}
export default DynamicPage