import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Row } from 'antd';

const Slider = ({op}) => {

    return (
        <>
        <Row>
          <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
           height:'106vh',
            // position:'relative',
            // top:'-12vh',
        }}
        >
            <div style={{
              background:op
            }}>
              <SwiperSlide style={{
                zIndex:'100',
                backgroundImage:"url('http://zetbio.com/theme/zb/img/main/sl-img02.jpg')",
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // opacity:op,
              }} >
              
                <div className='content'
                  style={{
                    position:'absolute', top:'30%', width:'100%',
                    textAlign:'center',
                    padding:'0 30px'
                  }}
                >
                  <div style={{ display:'flex', justifyContent:'center'}}>
                    <img src='http://zetbio.com/theme/zb/img/main/anylab-lg-covid-w2.png'
                      style={{
                        height:'145px', verticalAlign:'middle', display:'block',
              
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color:'white',
                      position:'relative',
                      margin:'0 auto'
                    }}
                  >COVID-19 팬데믹에서 생명의 소중함을 제트바이오텍의 혁신적인 기술 솔루션을 통해 회복하고자 합니다</p>
                </div>
              </SwiperSlide>
            </div>
      
            <SwiperSlide>
              <video src='http://zetbio.com/theme/zb/img/main/001.mp4' 
              autoPlay
              loop
              muted
              style={{width:'100wh', height:'100vh',
              // backgroundPosition: 'top center',
              // backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
              ></video>
            </SwiperSlide>
        </Swiper>
        </Row>
        </>
      );
}

export default Slider;