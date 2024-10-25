import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import './App.css'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const handleBookmarks = (blogTitle) => {
    if (bookmarks.includes(blogTitle)) {
      return;
    } else {
      const updatedBookmarks = [...bookmarks, blogTitle];
      setBookmarks(updatedBookmarks);
    }
  }

  const handleMarkRead = (blog) => {
    if (bookmarks.includes(blog.title)) {
      const updatedBookmarks = bookmarks.filter(bookmarkTitle => bookmarkTitle != blog.title)
      setBookmarks(updatedBookmarks);
      const updatedTotalTime = totalTime + blog.read_time;
      setTotalTime(updatedTotalTime);
    } else {
      return;
    }
  }

  return (
    <div className='max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] min-[1600px]:max-w-[80rem] mx-auto'>
      <Header></Header>
      <div className='w-full flex flex-col md:flex-row md:justify-between items-start mb-16 sm:mb-20 lg:mb-40'>
        <div className='w-full md:w-[66%]'>
          <Blogs handleBookmarks={handleBookmarks} handleMarkRead={handleMarkRead}></Blogs>
        </div>
        <div className='w-full md:w-[32.1%]'>
          <Bookmarks bookmarks={bookmarks} totalTime={totalTime}></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
