import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars';

const SingleProduct = () => {

    const { id } = useParams();

    return (
        <>
            <section className='section__container bg-primary-light'>

                <h2 className='section__header capitalize'>Single Product Page</h2>

                <div className='section__subheader space-x-2'>

                    <span className='hover:text-primary'><Link to="/">Home</Link></span>

                    <i className="ri-arrow-right-s-line"></i>

                    <span className='hover:text-primary'><Link to="/shop">Shop</Link></span>

                    <i className="ri-arrow-right-s-line"></i>

                    <span className='hover:text-primary'>productname</span>

                </div>

            </section>

            <section className='section__container mt-8'>
                <div className='flex flex-col items-center md:flex-row gap-8'>
                    {/* product image */}
                    <div className='md:w-1/2 w-auto'>
                        <img src="https://i.postimg.cc/mZ5sRWMC/watch-prod-1.webp" alt="" className='rounded-md  w-60 h-auto' />
                    </div>

                    <div className='md:w-1/2 w-full'>
                        <h3 className='text-2xl font-semibold mb-4'>Product name</h3>
                        <p className='text-xl text-primary mb-4'>Rs100 <s>Rs130</s></p>
                        <p className='text-gray-400 mb-4'>This is an product des</p>

                        {/* additional product detail info */}

                        <div>
                            <p><strong>Category:</strong>Headphone</p>
                            <p><strong>Color:</strong>red</p>
                            <div className='flex gap-1 items-center'>
                                <strong>Rating:</strong>
                                <RatingStars />
                            </div>

                        </div>

                        <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>


            {/* display reviews */}
            {/* too work with review */}
            <section className='section__container mt-8'>
                Reviews Here
            </section>
        </>
    )
}

export default SingleProduct