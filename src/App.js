import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import Footer from './components/Footer/Footer';
import posts from './components/Post/posts.json'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      
      {
        posts.map(post => {
          return (
            <Post 
            image={post.image} 
            description={post.description} />
          );
        })
      }
      
      <Footer />
    </div>
  )
}

export default App;
