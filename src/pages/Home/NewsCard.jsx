const NewsCard = ({ news }) => {
    const { title,thumbnail_url,author,details} = news;
    return (
        <div className="card bg-base-100  border mb-3  shadow-xl">
            <div>
                <div className="p-4 flex gap-4">
                <img className="w-10 h-10 rounded-full " src={author.img} alt="" />
                <div className="f">
                    <h2>{author.name}</h2>
                    <h3>{author.published_date}</h3>
                </div>
                </div>
                <div></div>
            </div>
            <div className="p-4">
                <h2 className="card-title">{title} </h2>
            <figure>
                <img className="h-72 w-full "
                    src={thumbnail_url} />
            </figure>
            </div>
            <div className="p-4">
                <p>{details}</p>
            </div>
        </div>
    );
};

export default NewsCard;