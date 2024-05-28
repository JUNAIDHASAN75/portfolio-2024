import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import summer1 from '../assets/images/summer/summer1.png'
import summer2 from '../assets/images/summer/summer2.png'
import summer3 from '../assets/images/summer/summer3.png'
import summer4 from '../assets/images/summer/summer4.png'


const ProjectThree = () => {
    return (
        <div>
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
            className="mySwiper"
        >
            <SwiperSlide><img src={summer1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={summer2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={summer3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={summer4} alt="" /></SwiperSlide>
        </Swiper>
        </div>
    );
};

export default ProjectThree;