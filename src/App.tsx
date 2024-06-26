import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import HooksPage from './pages/HooksPage/HooksPage';
import PostsPage from './pages/PostsPage/PostsPage';
import PostDetailPage from './pages/PostsPage/PostDetailPage/PostDetailPage';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hooks" element={<HooksPage />} />
            <Route path="hooks/:slug" element={<HooksPage />} />
            <Route path="hooks/:slug/:id" element={<HooksPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:postId" element={<PostDetailPage />} />
          </Route>

          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
