import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <section>
        <SectionTitle subHeading={"check it out"} heading={"Featured Item"} />
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
          <div>
            <img src={featured} alt="" />
          </div>
          <div className="md:ml-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              aliquid officiis dolorem temporibus iusto perferendis labore.
              Facere ullam similique ad tenetur fugiat officia soluta, itaque
              natus dolores, odit magni ea dolore rerum incidunt sunt placeat
              illo laboriosam totam! Ducimus repellendus illo aperiam corrupti
              obcaecati! Cum accusamus deserunt ut aperiam hic!
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
