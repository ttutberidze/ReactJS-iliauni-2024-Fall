import Footer from "./functional/footer"
import Header from "./functional/header"
import Main from "./functional/main"
import Sidebar from "./functional/sidebar"
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className='content'>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App;