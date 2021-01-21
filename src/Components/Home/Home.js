import React from 'react'
import { DividerComp } from '../Divider/DividerComp'
import { AppbarComp } from '../Appbar/AppbarComp'
import { SliderComp } from '../Slider/SliderComp'
import boots from '../boots.jpg'

export const Home = () => {
    return (
        <div>
            <AppbarComp />
            <SliderComp />
            <DividerComp />
            <img src={boots} alt="boots" width='100%' height='600px' />
        </div>
    )
}
