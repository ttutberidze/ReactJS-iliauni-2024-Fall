import { useEffect, useState} from 'react';
import {getUsers} from '../services/user';

const Users = () => {

    const [users, setUsers] = useState([]);

    // const fetchData = useCallback(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then(res => setUsers(res))
    // }, [])

    // useEffect(() => {
    //     fetchData()
    // }, [fetchData])

    // useEffect(() => {
    //     (async() => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await res.json()
    //         setUsers(data)
    //     })()
    // }, [])

    useEffect(() => {
        (async() => {
            const data = await getUsers();
            setUsers(data)
        })()
    }, [])

    return (
        <div>
            {users.map((user) => (
                <div key={user.id} style={{border: '1px solid grey'}}>
                    <p>Name: {user.name}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Users