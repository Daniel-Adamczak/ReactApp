import { HashRouter as Router } from 'react-router-dom';
import { Header } from './components/UI/Header/Header';
import { BlogProvider } from './components/context/BlogContext';
import { Main } from './components/UI/Main/Main';
import { Footer } from './components/UI/Footer/Footer';
import {UserProvider} from './components/context/UsersContext'


export default function App() {
  return (
    <Router>
      <div className='w-full min-h-[100vh] bg-black flex flex-col'>
        <UserProvider>
        <Header />
        <BlogProvider>
          <Main />
        </BlogProvider>
        <Footer />
        </UserProvider>
      </div>
    </Router>
  );
}
