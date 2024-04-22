import { useEffect } from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import { BlogGrid, Footer, Navbar } from '../components';

const blogs = [
  { id: '1', title: 'Blog 1', content: 'Content for Blog 1' },
  { id: '2', title: 'Blog 2', content: 'Content for Blog 2' },
];

const BlogContent = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === blogId);

  useEffect(() => {
    if (!blog) navigate('/not-found');
  }, [blog, navigate]);

  return blog ? (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  ) : null;
};

// const BulletinGrid = () => {};

// const BulletinContent = () => {};

const Bulletin = () => {
  return (
    <>
      <Navbar />

      <div className='mt-16'>
        <Routes>
          <Route
            path='/'
            element={<BlogGrid />}
          />
          <Route
            path='/:blogId'
            element={<BlogContent />}
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default Bulletin;
