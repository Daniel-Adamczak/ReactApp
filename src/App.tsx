import { Footer } from './components/UI/Footer/Footer';
import { Header } from './components/UI/Header/Header';
import { Main } from './components/UI/Main/Main';
import { BlogProvider } from './components/context/BlogContext';

export default function App() {
  return (
    <div className='w-full h-[100vh] bg-black flex flex-col'>
      <Header />

      <BlogProvider>
        <Main />
      </BlogProvider>

      <Footer />
    </div>
  );
}
