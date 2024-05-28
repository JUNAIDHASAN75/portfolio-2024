import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import toy1 from '../assets/images/toy/toymarket.png'
import toy2 from '../assets/images/toy/toy2.png'
import toy3 from '../assets/images/toy/toy3.png'
import toy4 from '../assets/images/toy/toy4.png'





const ProjectTow = () => {
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
            className="mySwiper "
        >
            <SwiperSlide><img src={toy1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={toy2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={toy3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={toy4} alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default ProjectTow;