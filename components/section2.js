import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
export default function section2() {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}


            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="news">
            <div className="image">
                <Link href={"/"}><Image src={"/images/img2.jpg"} width={300} height={150} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-400 font-bold hover:text-green-400">Education, Lifestyle</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-white text-3xl font-bold hover:text-orange-400">CTS are coming 🥲</Link>
                </div>
                <p className="text-white-500 py-3 font-weight: 700 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec metus a urna sollicitudin volutpat. Nulla consequat nibh et finibus porta. Curabitur ac imperdiet ligula. Praesent posuere tellus ligula. Aliquam at dui elementum dolor pellentesque elementum. Donec posuere turpis vel tempus pharetra. Suspendisse eget convallis odio.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}