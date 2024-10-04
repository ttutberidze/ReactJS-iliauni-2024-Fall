import { useTheme } from "../context/theme"

const Header = () => {
    const {theme} = useTheme()
    return <div className='header' style={theme}>Header</div>
}

export default Header