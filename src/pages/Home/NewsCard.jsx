import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, author, details, _id} = news;
    return (
        <div className="card bg-base-100   mb-3  shadow-xl">
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
                        src={image_url} />
                </figure>
                    <p>
                        {
                            details.length>200?
                            <p>{details.slice(0,200)} <Link
                            to={`/news/${_id}`} className="text-[#FF8C47] font-bold">Read More....</Link></p>:
                            <p>{details}</p>
                        }
                    </p>
            </div>
        </div>
    );
};

export default NewsCard;