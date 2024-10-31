import { useParams } from "react-router-dom";
import {useValidateQueryParams} from '../hooks/validateQueryParams'

const SingleUser = () => {
    const {userId} = useParams()
    const [isValid, names] = useValidateQueryParams('name')
    console.log(isValid, names)
    return <div>User width ID: {userId}</div>
}

export default SingleUser;