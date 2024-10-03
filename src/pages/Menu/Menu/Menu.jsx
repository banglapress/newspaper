import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Newspaper | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" />
      <SectionTitle heading={"today's Offer"} subHeading={"Don't Miss"} />

      <MenuCategory items={offered} />
      <MenuCategory items={desserts} title="desserts" coverImg={dessertImg} />
      <MenuCategory items={pizzas} title="pizzas" coverImg={menuImg} />
      <MenuCategory items={soups} title="soups" coverImg={soupImg} />
      <MenuCategory items={salads} title="salads" coverImg={saladImg} />
    </div>
  );
};

export default Menu;
