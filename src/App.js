import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Footer />
    </div>
  )
}

export default App;
