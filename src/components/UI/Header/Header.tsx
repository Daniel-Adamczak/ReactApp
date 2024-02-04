import { Navbar } from './navigation/Navbar';
import { ManageAccount } from './ManageAccount';
import { useUser } from '../../context/UsersContext';
import { Link } from 'react-router-dom';
export const Header = () => {
  const { authenticatedUser } = useUser();
  return (
    <header className='flex flex-row justify-between text-slate-400 p-3 shadow-[0_0_20px_gray] mb-4 align-text-bottom'>
      <div className='flex flex-row gap-3'>
        <img src='/ReactApp/vite.svg' alt='Vite logo' className='h-7' />
        <img src='/ReactApp/dist/React.png' alt='React logo' className='h-7' />
        <img
          src='./ReactApp/typescript.svg'
          alt='TypeScript logo'
          className='h-7'
        />
        <img
          src='./tailwind.png'
          alt='Tailwind CSS logo'
          className='h-7'
        />
        <img
          src='/ReactRouter.png'
          alt='React Router logo'
          className='h-7'
        />
      </div>

      <h1 className='h-full align-bottom text-2xl'>My company</h1>
      <div className='flex flex-row gap-3'>
        {authenticatedUser && (
          <Link to='/settings'>
            <ManageAccount />
          </Link>
        )}
        <Navbar />
      </div>
    </header>
  );
};
