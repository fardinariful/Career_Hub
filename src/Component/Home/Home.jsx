import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Categories></Categories>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;