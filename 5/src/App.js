import Footer from "./functional/footer"
import Header from "./functional/header"
import Sidebar from "./functional/sidebar"
import './App.css';
import RouterComponent from "./functional/router";

const App = () => {
  return (
    <div>
      <Header />
      <div className='content'>
        <Sidebar />
        <RouterComponent />
      </div>
      <Footer />
    </div>
  )
}

export default App;