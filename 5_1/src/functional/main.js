import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import User from "../User"

const Main = () => {
    const [users, setUsers] = useState([{name: 'James Bond'}, {name: 'Superman'}])
    const inputRef = useRef();
    const myRef = useRef(100);
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    // useEffect(() => {
    //     console.log('Mounted')
    // }, [])

    // useEffect(() => {
    //     console.log('User length has changed', users)
    //     return () => {
    //         console.log('cleanup', users)
    //     }
    // }, [users.length])

    // useEffect(() => {
    //     console.log('componentDidUpdate')
    // })

    // const onChange = useCallback((event, index) => {
    //     const value = event.target.value;
    //     const oldUsers = [...users];
    //     const newUser = {...oldUsers[index]}
    //     newUser.name = value;
    //     oldUsers[index] = newUser;
    //     setUsers(oldUsers)
    // }, [users])

    const onChange = useCallback((event, index) => {
        setUsers((state) => {
            const value = event.target.value;
            const oldUsers = [...state];
            const newUser = {...oldUsers[index]}
            newUser.name = value;
            oldUsers[index] = newUser;
            return oldUsers;
        })
    }, [])

    const add = () => {
        setUsers((state) => [...state, {name: ''}])
    }

    // const calculation = users.length * users.length;
    const calculation = useMemo(() => {
        return users.length * users.length;
    }, [users.length])

    console.log(calculation)
    
    return (
        <>
            <input ref={inputRef} />
            <button onClick={() => myRef.current += 1}>Increment</button>
            {users.map((user, index) => {
                return <User 
                            key={index} 
                            name={user.name} 
                            index={index}
                            onChange={onChange} 
                        />
            })}
            <div>
                <button onClick={add}>Add User</button>
            </div>
        </>
    )
}

export default Main;