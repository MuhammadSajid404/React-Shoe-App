import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderComp.css'

export const SliderComp = () => {
    return (
        <div style={{marginTop: '20px'}}>
            <Slider 
            dots={true}
            slidesToShow={2}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            arrows={true}>
                <div>
                    <center>
                    <img 
                    width='100%' 
                    height='400px'
                    src='https://i.ytimg.com/vi/hJJgLHkdSRE/maxresdefault.jpg'
                    alt='Nike Shoes'/>
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://static-01.daraz.pk/other/shop/071fedc0454df1978e930f0aa7ad8b62.jpeg'
                    alt='Nike Shoes 2' />
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://static-01.daraz.pk/other/shop/1505ec6bac35cf010d587eef1180ca47.jpeg_2200x2200q80.jpg_.webp'
                    alt='Nike Shoes3' />
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://www.sepsport.com/media/x490/Nike_Air_Max_Shoes/Air_Max_360/Nike_Air_Max_360_KPU_Running_Shoes_Men_Black_Red_310908-016.jpg'
                    alt='Nike Shoes 4' />
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://sneakernews.com/wp-content/uploads/2020/01/adidas-Superstar-Chinese-New-Year-2020-FW5271-2.jpg?w=1140'
                    alt='Nike Shoes3' />
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://images.complex.com/complex/images/c_crop,h_1990,w_3236,x_588,y_578/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/ljxg8qrk8z3ng0bb7tcz/adidas-consortium-zx-10000c-ee9485-pair-2'
                    alt='Nike Shoes3' />
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://qph.fs.quoracdn.net/main-qimg-9c6bdaa0fec5d413b0d535e35a2ad53e'
                    alt='Nike Shoes3' />
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://basketzone.net/zdjecia/zdjecia/2015/07/18/Q3698jordanshoes_12180.jpg'
                    alt='Nike Shoes3' />
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://footwearnews.com/wp-content/uploads/2019/06/carhartt-wip-converse-chuck-70-ss19.jpg'
                    alt='Nike Shoes3' />
                    </center>
                </div>
                <div>
                <center>
                    <img 
                    width='100%' 
                    height='400px' 
                    src='https://media.jdsports.com/i/jdsports/CP100165_030_P2?$Main_3quarter_gray$&bg=rgb(237,237,237)'
                    alt='Nike Shoes3' />
                    </center>
                </div>
            </Slider>
        </div>
    )
}
