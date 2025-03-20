import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const TrendingCard = ({ backdrop_path, name, title, poster_path }) => {
  return (
    <SwiperSlide
      watchSlidesProgress={true}
      slidesPerView={3}
      className="mySwiper"
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={name || title}
        className="rounded-box"
      />
    </SwiperSlide>
  );
};

export default TrendingCard;
