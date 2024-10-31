import { NavLink } from "react-router-dom"
import { useTheme } from "../context/theme"

const menus = [
    {name: 'Home', path: '/'},
    {name: 'Counter', path: '/counter'},
    {name: 'Users', path: '/users'}
]

const Sidebar = () => {
    const {toggle} = useTheme()
    
    return <div className='sidebar'>
        <button onClick={toggle}>Toggle Theme</button>
        <ul>
            {menus.map((menu) => (
                <li key={menu.path}><NavLink style={({ isActive, isPending }) => {
                    return {
                        background: isActive ? 'red' : ''
                    }
                }} to={menu.path}>{menu.name}</NavLink></li>
            ))}
        </ul>
    </div>
}

export default Sidebar