import PropTypes from "prop-types";

const Blog = ({blog, handleBookmarks, handleMarkRead}) => {
    const {title, cover_img, author, author_img, posted_date, read_time, hashtags} = blog;

    return (
        <div className="w-full py-8 border-b-2 border-[#11111126]">

            {/* Blog cover */}
            <img className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover mb-8" src={cover_img} alt="" />

            <div className="w-full flex justify-between items-center">
                {/* Author details */}
                <div className="flex items-start gap-2 mb-4">
                    <img className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 rounded-full" src={author_img} alt="" />
                    <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl text-[#111111] font-bold">{author}</h3>
                        <p className="text-xs sm:text-sm lg:text-base text-[#11111199] font-semibold">{posted_date}</p>
                    </div>
                </div>

                {/* Read time and bookmark */}
                <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl text-[#11111199] font-medium">
                    <p>{read_time} min read</p>
                    <a onClick={() => handleBookmarks(title)}>
                        <svg width="16.500000" height="19.502625" viewBox="0 0 16.5 19.5026" fill="none" xmlns="http://www.w3.org/2000/svg">
	                        <defs/>
	                        <path id="Vector" d="M15.75 3.25L15.75 18.75L8.25 15L0.75 18.75L0.75 3.25C0.75 2.15 1.55 1.2 2.65 1.07C6.37 0.64 10.12 0.64 13.84 1.07C14.94 1.2 15.75 2.15 15.75 3.25Z" stroke="#111111" strokeOpacity="0.600000" strokeWidth="1.500000" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Blog title */}
            <h1 className="text-2xl/[1.6] sm:text-3xl/[1.6] lg:text-4xl/[1.6] text-[#111111] font-bold mb-4">{title}</h1>

            {/* Hashtags */}
            <div className="flex flex-col md:flex-row gap-4 text-base sm:text-lg lg:text-xl text-[#11111199] font-semibold mb-4">
                {
                    hashtags.map((hashtag, idx) => <p key={idx}>{hashtag}</p>)
                }
            </div>

            {/* Mark read anchor */}
            <a onClick={() => handleMarkRead(blog)} className="text-base sm:text-lg lg:text-xl text-[#6047EC] font-semibold underline">Mark as read</a>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired,
}

export default Blog;