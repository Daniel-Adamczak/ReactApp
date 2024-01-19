import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul className='flex flex-row gap-3 text-slate-400'>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/recipes'>Recipes</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};
