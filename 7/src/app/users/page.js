'use server'
import UserListItem from '@/components/userListItem'
import {fetchUsers} from '@/services/user.service'

const UserListPage = async () => {
    const users = await fetchUsers()

    return (
        <div>
            {users.map((user) => <UserListItem key={user._id} user={user} />)}
        </div>
    )
}

export default UserListPage;