'use client'
import Image from 'next/image'
import Slider from 'react-slick'

const carouselItems = [
  {
    image: "/images/slide/slide1.jpg",
    title: "স্লাইড ১",
    description: "আমাদের প্রথম উদ্যোগের একটি চিত্র।"
  },
  {
    image: "/images/slide/slide2.jpg",
    title: "স্লাইড ২",
    description: "আমাদের কার্যক্রমের আরেকটি চিত্র।"
  },
  {
    image: "/images/slide/slide3.jpg",
    title: "স্লাইড ৩",
    description: "আমাদের কমিউনিটির একটি মুহূর্ত।"
  }
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="carousel" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">আমাদের কিছু কার্যক্রম</h2>
        <Slider {...settings}>
          {carouselItems.map((item, idx) => (
            <div key={idx}>
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                style={{ objectFit: 'cover' }}
              />
              <div className="carousel-caption">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}