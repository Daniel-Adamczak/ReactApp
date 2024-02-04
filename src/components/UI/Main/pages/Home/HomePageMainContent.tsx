
import { Card } from './Card';
import { Link } from 'react-router-dom';

export const HomePageMainContent = () => {
  return (
    <div className='flex flex-row gap-5 flex-wrap justify-around items-center'>
      <Card>
        <Link to='/blog'>
          <img
            src='/ReactApp/blog.png'
            alt=''
            className='h-52 align-middle'
          />
          <h3 className='text-5xl text-slate-400 text-center font-bold mt-4'>
            Blog
          </h3>
        </Link>
      </Card>

      <Card>
        <Link to='/products'>
          <img
            src='/ReactApp/shopping-bag.png'
            alt=''
            className='h-52 align-middle'
          />
          <h3 className='text-5xl text-slate-400 text-center font-bold mt-4'>
            Products
          </h3>
        </Link>
      </Card>

      <Card>
        <Link to='/recipes'>
          <img
            src='/ReactApp/chef.png'
            alt=''
            className='h-52 align-middle'
          />
          <h3 className='text-5xl text-slate-400 text-center font-bold mt-4'>
            Recipes
          </h3>
        </Link>
      </Card>
      <Card>
        <Link to='/users'>
          <img
            src='/ReactApp/group.png'
            alt=''
            className='h-52 align-middle ml-6'
          />
          <h3 className='text-5xl text-slate-400 text-center font-bold mt-4'>
            Community
          </h3>
        </Link>
      </Card>
    </div>
  );
};
