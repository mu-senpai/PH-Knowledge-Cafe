import { useState } from 'react'
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from "prop-types";

const Blogs = ({handleBookmarks, handleMarkRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetch('blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-full'>
            {
              blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleMarkRead={handleMarkRead}></Blog>)
            }     
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired,
}

export default Blogs;