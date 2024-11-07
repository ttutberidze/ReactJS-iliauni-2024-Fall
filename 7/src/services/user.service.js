export const fetchUsers = async () => {
    const res = await fetch('http://localhost:8888/user', {
        cache: 'force-cache',
        next: {
            tags: ['user']
        }
    });
    return await res.json()
}

export const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:8888/user/${id}`, {
        cache: 'force-cache',
        next: {
            tags: ['user']
        }
    });
    return await res.json()
}