import React from 'react'

import category1 from "../../assets/cat-1.jpg"
import category2 from "../../assets/cat-2.jpg"
import category3 from "../../assets/cat-3.jpg"
import category4 from "../../assets/cat-4.jpg"
import { Link } from 'react-router-dom'


const Categories = () => {

    const categories = [
        { name: 'Headphones', path: 'headphone', image: category1 },
        { name: 'Bluetooth Speaker', path: 'speaker', image: category2 },
        { name: 'Smart Watches', path: 'watch', image: category3 },
        { name: 'Wirless Earbuds', path: 'earbuds', image: category4 }
    ]

    return (
        <>
            <div className="product__grid">
                {
                    categories.map((category) => (
                        <Link key={category.name} to={`/categories/${category.path}`} >
                            <img src={category.image} alt={category.name} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Categories