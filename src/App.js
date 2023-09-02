import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/layouts/Navbar';
import Header from './Components/layouts/Header';
import Footer from './Components/layouts/Footer.jsx'
import NewPost from './Components/Posts/NewPost';
import PostPage from './Components/Posts/PostPage';
import About from './Components/Home/About.jsx'
import Missing from './Components/Missing';
import useWindowSize from './Components/hooks/useWindowSize';
import EditPost from './Components/Posts/EditPost';
import { DataProvider } from './Components/context/DataContext';

function App() {

  const { width } = useWindowSize();

  return (


    <Router>
      <DataProvider>
        <Header width={width} />
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/post' Component={NewPost} />
          <Route path='/post/:id' Component={PostPage} />
          <Route path='/edit/:id' Component={EditPost} />
          <Route path='/about' Component={About} />
          <Route path='*' Component={Missing} />
        </Routes>
      </DataProvider>
      <Footer />
    </Router>



  );
}

export default App;
