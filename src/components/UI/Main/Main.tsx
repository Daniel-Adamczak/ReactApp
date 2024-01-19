import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogPage } from './pages/BlogPage';
import { RecipesPage } from './pages/RecipesPage';
import { UsersPage } from './pages/UsersPage';
import { ProductsPage } from './pages/ProductsPage';
import { HomePage } from './pages/HomePage';

export const Main = () => {
  return (
    <main className=' '>
      
        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
        </Routes>
     
    </main>
  );
};
