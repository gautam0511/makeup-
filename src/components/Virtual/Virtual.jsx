import React from 'react'
import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Virtual = () => {
    return (
        <div className={css.Virtual}>
            <div className={css.left}>
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong Shade Again!</span>
                <span>Try Now</span>
                <img src={Shade}></img>
            </div>
            <div className={css.right}>
                <div className={css.wrapper}>
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={Before} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={After} alt="Image two" />}
                    />
                </div>

            </div>
        </div>
    )
}

export default Virtual