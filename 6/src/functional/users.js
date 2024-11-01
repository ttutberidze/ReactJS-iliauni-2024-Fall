import { useState } from 'react';
import { useUserListQuery } from '../queries/useUserListQuery';
import { Link } from 'react-router-dom';


const Users = () => {
    const [page, setPage] = useState(1);

    const {data, isLoading, isSuccess, error} = useUserListQuery({page})

    return (
        <div>
            <button onClick={() => setPage(2)}>update</button>
            {data?.map((user) => (
                <div key={user.id} style={{border: '1px solid grey'}}>
                    <p>Name: {user.name}</p>
                    <p>Company: {user.company.name}</p>
                    <Link to={`/user/${user.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    )
}

export default Users