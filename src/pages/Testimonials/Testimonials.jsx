import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

import "./styles.css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://jeebisa.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"what our clients say"}
        heading={"Testimonials"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center  ">
              <Rating
                className=""
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-10"> {review.details} </p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
