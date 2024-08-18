import { useParams } from "react-router-dom";
import NewsCard from "../Home/NewsCard";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1>Dragon News</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-3">
                <p>{id}</p>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;