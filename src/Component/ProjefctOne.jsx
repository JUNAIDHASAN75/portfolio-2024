import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import recipe1 from '../assets/images/recipe/recipe.png'
import recipe2 from '../assets/images/recipe/recipe2.png'
import recipe3 from '../assets/images/recipe/Screenshot_16.png'

const ProjefctOne = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper z-10"
        >
            <SwiperSlide><img className="w-full" src={recipe1} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full" src={recipe2} alt="" /></SwiperSlide>
            <SwiperSlide><img className="w-full" src={recipe3} alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default ProjefctOne;