import React from 'react'
import Logo from '../../assets/logo.png'
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon } from '@heroicons/react/outline'
import css from './Footer.module.css'

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr></hr>
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo}></img>
                    <span>amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            {/* <LocationMarkerIcon className={css.icon} /> */}
                            <span>111 north avenue Orlando,FL 32001</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            {/* <LocationMarkerIcon className={css.icon} /> */}
                            <span>signup</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>About Us</span>
                        <span className={css.pngLine}>
                            {/* <LocationMarkerIcon className={css.icon} /> */}
                            <span>111 north avenue Orlando,FL 32001</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Social Media</span>
                        <span className={css.pngLine}>
                            {/* <LocationMarkerIcon className={css.icon} /> */}
                            <span>Instagram</span>
                            <span>Facebook</span>
                            <span>Linkedin</span>

                        </span>
                    </div>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>Copyright @2022 by Amazon</span>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer