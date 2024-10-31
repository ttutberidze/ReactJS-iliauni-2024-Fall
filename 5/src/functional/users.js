import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchUsers } from '../store/actions/user.action';

const Users = () => {
    const dispatch = useDispatch()
    const {list, state} = useSelector((state) => state.user)

    useEffect(() => {
        if(state === 'INITIAL') {
            dispatch(fetchUsers())
        }
    }, [dispatch, state])

    if(state === 'LOADING') {
        return <div>LOADING...</div>
    }

    return (
        <div>
            {list.map((user) => (
                <div key={user.id} style={{border: '1px solid grey'}}>
                    <p>Name: {user.name}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Users