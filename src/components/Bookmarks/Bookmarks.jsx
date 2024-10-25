import PropTypes from "prop-types";

const Bookmarks = ({bookmarks, totalTime}) => {
    return (
        <div className="w-full space-y-6 py-8">
            <div className="w-full px-16 py-5 bg-[#6047EC1A] border-2 border-[#6047EC] rounded-lg">
                <p className="text-2xl font-bold text-[#6047EC] text-center">Spent time on read: {totalTime}</p>
            </div>
            <div className="w-full h-96 md:h-[60rem] lg:h-[43rem] overflow-auto bg-[#1111110D] rounded-lg p-8 space-y-5">
                <h3 className="text-2xl font-bold text-[#111111]">Bookmarked Blogs: {bookmarks.length}</h3>
                <div className="space-y-4">
                    {
                        bookmarks.map((bookmark, idx) => {
                            return(
                                <div key={idx} className="card bg-base-100 w-full">
                                    <div className="card-body">
                                        <h2 className="card-title">{bookmark}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    totalTime: PropTypes.number.isRequired,
}

export default Bookmarks;