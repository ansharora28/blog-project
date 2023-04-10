import Link from "next/link"
import Author from "./_child/author"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

// import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export default function section3() {
    const MyPage = () => {
        const pageId = 'unique-page-id';
        const pageUrl = 'https://example.com/my-page';
        const pageTitle = 'My Page Title';
        useEffect(() => {
            const fetchComments = async () => {
              const response = await fetch('http://localhost:3000/comments');
              const data = await response.json();
              setComments(data);
            };
            fetchComments();
          }, []);
        return (
            <section className="container mx-auto md:px-20 py-10">
                <div className="container mx-auto md:px-20">

                    <h1 className="font-bold text-4xl py-12 text-center">Popular Postssss</h1>

                    <Swiper
                        slidesPerView={2}
                    >
                        <SwiperSlide>{Post()}</SwiperSlide>
                        <SwiperSlide>{Post1()}</SwiperSlide>
                        <SwiperSlide>{Post()}</SwiperSlide>
                        <SwiperSlide>{Post1()}</SwiperSlide>

                    </Swiper>
                </div>
                <div>
            <CommentBox comments={comments} setComments={setComments} />
            </div>
            </section>
        )
    }

    function Post() {
        return (
            <div className="news px-2">
                <div className="image">
                    <Link href={"/"}><Image src={"/images/img3.png"} width={300} height={150} /></Link>
                </div>
                <div className="info flex justify-center flex-col">
                    <div className="cat">
                        <Link href={"/"} className="text-orange-400 font-bold hover:text-green-400">NEWS</Link>
                    </div>
                    <div className="title">
                        <Link href={"/"} className="text-white text-3xl font-bold hover:text-orange-400">This site is mobile responsive!</Link>
                    </div>
                    <p className="text-white-500 py-3 font-weight: 700 ">
                        This is a blog project made using NextJS and Tailwind CSS. The page is still under construction!                </p>
                    <Author></Author>
                </div>
            </div>
        )
    }
    function Post1() {
        return (
            <div className="news px-2">
                <div className="image">
                    <Link href={"/"}><Image src={"/images/img4.png"} width={260} height={150} /></Link>
                </div>
                <div className="info flex justify-center flex-col">
                    <div className="cat">
                        <Link href={"/"} className="text-orange-400 font-bold hover:text-green-400">NEWS</Link>
                    </div>
                    <div className="title">
                        <Link href={"/"} className="text-white text-3xl font-bold hover:text-orange-400">You can slide these panels</Link>
                    </div>
                    <p className="text-white-500 py-3 font-weight: 700 ">
                        I have used the swiper slider component framework to make mobile navigation easier
                    </p>
                    <Author></Author>
                </div>
            </div>
        )
    }}