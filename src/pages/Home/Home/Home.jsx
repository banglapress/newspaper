import { Helmet } from "react-helmet-async";
import Testimonials from "../../Testimonials/Testimonials";
import BrowseCategory from "../BrowseCategory/BrowseCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import NewCourse from "../New-Course/NewCourse";
import NavBarBar from "../../Shared/Navbar/NavBar";
import FeaturedTenders from "../FeaturedTenders/FeaturedTenders";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jeebika | Home</title>
      </Helmet>
      <NavBarBar />
      <NewCourse />
      <BrowseCategory />
      <FeaturedJobs />
      <FeaturedTenders />
      <Testimonials />
    </>
  );
};

export default Home;
