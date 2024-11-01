import { useParams } from "react-router-dom";
// import {useValidateQueryParams} from '../hooks/validateQueryParams'
import { useUpdateUserMutation } from "../mutations/useUpdateUser";

const SingleUser = () => {
    const {userId} = useParams()
    // const [isValid, names] = useValidateQueryParams('name')
    const {mutate, isPending} = useUpdateUserMutation()

    return (
        <div>
            <button onClick={() => mutate({id: userId})}>Update</button>    
            User width ID: {userId}
        </div>
    )
}

export default SingleUser;