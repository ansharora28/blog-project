import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';



export default function section1() {
    SwiperCore.use([Autoplay])
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Featured Posts</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>

                    ...
                </Swiper>



            </div>
        </section>
    )
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}><Image src={"/images/img1.png"} width={500} height={400} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-400 font-bold hover:text-green-400">Education, Lifestyle</Link>
                    <Link href={"/"} className="text-orange-400 font-bold"> - March 20, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-white text-4xl font-bold hover:text-orange-400 ">This is the Blog Post's title.</Link>
                </div>
                <p className="text-white-500 py-3 font-weight: 700 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec metus a urna sollicitudin volutpat. Nulla consequat nibh et finibus porta. Curabitur ac imperdiet ligula. Praesent posuere tellus ligula. Aliquam at dui elementum dolor pellentesque elementum. Donec posuere turpis vel tempus pharetra. Suspendisse eget convallis odio.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}