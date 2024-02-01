

import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import { BlogPage } from './pages/Blog/BlogPage';
import { RecipesPage } from './pages/Recipes/RecipesPage';
import { UsersPage } from './pages/Users/UsersPage';
import { ProductsPage } from './pages/Products/ProductsPage';
import { HomePage } from './pages/Home/HomePage';
import { Settings } from './pages/Settings/Settings';

export const Main = () => {
  return (
    <main className=' '>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </main>
  );
};
