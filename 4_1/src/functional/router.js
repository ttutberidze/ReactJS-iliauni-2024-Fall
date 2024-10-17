import {Route, Routes} from 'react-router-dom'
import Main from './main'
import About from './about'
import Users from './users'
import SingleUser from './singleUser'

const RouterComponent = () => {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/users' element={<Users />} />
                <Route path='/user/:userId' element={<SingleUser />} />
            </Routes>
        </div>
    )
}

export default RouterComponent