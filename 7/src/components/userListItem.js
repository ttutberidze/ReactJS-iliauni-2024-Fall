'use client'
import {useRouter} from 'next/navigation'

const UserListItem = ({user}) => {
    const router = useRouter()
    const onClick = () => {
        router.push(`/users/${user._id}`)
    }

    return (
        <div style={{padding: 16, border: '1px solid lime'}}>
            <p>Name: {user.name}</p>
            <p>Number of tasks: {user.tasks.length}</p>
            <button onClick={onClick}>See Details</button>
        </div>
    )
}

export default UserListItem