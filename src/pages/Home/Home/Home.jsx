<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
import Testimonials from "../../Testimonials/Testimonials";
import BrowseCategory from "../BrowseCategory/BrowseCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import NewCourse from "../New-Course/NewCourse";
import NavBarBar from "../../Shared/Navbar/NavBarBar";

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
      <Testimonials />
    </>
=======
import Category from "../../Category/Category";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <h1>This is Home!</h1>
      <Banner/>
      <h1>This is Swiper!</h1>
      <Category/>
    </div>
>>>>>>> b438837d6925f2de2ab3795dd9f8517b7a909532
  );
};

export default Home;
