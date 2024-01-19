import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/UI/Header/Header';
import { BlogProvider } from './components/context/BlogContext';
import { Main } from './components/UI/Main/Main';
import { Footer } from './components/UI/Footer/Footer';
// ... inne importy

export default function App() {
  return (
    <Router>
      <div className='w-full min-h-[100vh] bg-black flex flex-col'>
        <Header />
        <BlogProvider>
          <Main />
        </BlogProvider>
        <Footer />
      </div>
    </Router>
  );
}
