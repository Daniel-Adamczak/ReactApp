import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul className='flex flex-row gap-5 text-slate-400'>
      <li className='hover:text-[#ffc600] p-2'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:text-[#ffc600] p-2'>
          <Link to='/products'>Products</Link>
        </li>
        <li className='hover:text-[#ffc600] p-2'>
          <Link to='/users'>Users</Link>
        </li>
        <li className='hover:text-[#ffc600] p-2'>
          <Link to='/recipes'>Recipes</Link>
        </li>
        <li className='hover:text-[#ffc600] p-2'>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};
