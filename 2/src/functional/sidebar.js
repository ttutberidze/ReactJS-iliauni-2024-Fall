import { useTheme } from "../context/theme"

const Sidebar = () => {
    const {toggle} = useTheme()
    
    return <div className='sidebar'>
        <button onClick={toggle}>Toggle Theme</button>
        Sidebar
    </div>
}

export default Sidebar