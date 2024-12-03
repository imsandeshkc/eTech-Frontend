import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='section__container footer__container'>

            <div className='footer__col'>
                <h4>CONTACT INFO</h4>
                <p>
                    <span><i className="ri-map-pin-2-fill"></i></span>
                    153, Kshetrapur-2 Street, Narayangarh, Chitwan, Nepal
                </p>

                <p>
                    <span><i className="ri-mail-fill"></i></span>
                    support@etech.com.np
                </p>

                <p>
                    <span><i className="ri-phone-fill"></i></span>    
                    +977-9866217231
                </p>

            </div>

            <div className='footer__col'>
                <h4>COMPANY</h4>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Work With Us</a>
                <a href="/">Our Blogs</a>
                <a href="/">Terms and Conditions</a>
            </div>

            <div className='footer__col'>
                <h4>USEFUL LINK</h4>
                <a href="/">Help</a>
                <a href="/">Track your order</a>
                <a href="/">shop</a>
            </div>

        </footer>

        <div className='footer__bar'>
            Copyright <i class="ri-copyright-line"></i> 2025 by Digital HUT. All rights reserved.
        </div>
    </>
  )
}

export default Footer