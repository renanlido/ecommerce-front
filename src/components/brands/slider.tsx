'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import calvinKlein from '../../../public/assets/brands/calvin-klein.svg'
import gucci from '../../../public/assets/brands/gucci.svg'
import prada from '../../../public/assets/brands/prada.svg'
import versage from '../../../public/assets/brands/versage.svg'
import zara from '../../../public/assets/brands/zara.svg'

const brandImages = [
  { id: 1, name: 'Calvin Klein', src: calvinKlein },

  { id: 2, name: 'Gucci', src: gucci },

  { id: 3, name: 'Prada', src: prada },

  { id: 4, name: 'Versage', src: versage },

  { id: 5, name: 'zara', src: zara },
]

// interface SliderProps {
//   numSlides: number
// }

export function Slider() {
  function windowSize() {
    if (typeof window === 'undefined') return 1
    return window.innerWidth
  }
  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: windowSize() < 640 ? 2 : 4,
    navigation: false,
    pagination: {
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    draggable: true,
  }
  return (
    <div className="flex items-center justify-center bg-black px-4 py-10">
      <Swiper
        className="flex items-center justify-center"
        modules={[Autoplay]}
        {...settings}
        style={
          {
            //   '--swiper-pagination-bullet-inactive-color': '#d1cece',
            //   '--swiper-pagination-bullet-inactive-opacity': '1',
            //   '--swiper-pagination-bullet-size': '8px',
            //   '--swiper-pagination-bullet-horizontal-gap': '6px',
          }
        }
      >
        {brandImages.map((img) => {
          return (
            <SwiperSlide key={img.id} className="">
              <div
                className="flex justify-center bg-center"
                style={{ backgroundColor: 'transparent' }}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  className="flex justify-center bg-center"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
