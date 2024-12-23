import React, { useEffect, useState } from 'react'
import productsData from '../../data/products.json'
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ['all', 'watch', 'speaker', 'headphone', 'earbuds'],
    color: ['all', 'black', 'red', 'gold', 'green', 'blue', 'silver', 'beige'],
    priceRanges: [
        { label: 'Under Rs50', min: 0, max: 50 },
        { label: 'Rs50 - Rs100', min: 50, max: 100 },
        { label: 'Rs100 - Rs200', min: 100, max: 200 },
        { label: 'Rs200 - above', min: 200, max: Infinity },
    ]
};


const ShopPage = () => {

    const [products, setProducts] = useState(productsData);

    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRanges: ''
    });

    // filtering functions

    const applyFilters = () => {
        let filteredProducts = productsData;

        // filter by category
        if (filtersState.category && filtersState.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category)
        }

        // filter by color

        if (filtersState.color && filtersState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filtersState.color)
        }

        // filter by price range

        if (filtersState.priceRanges) {
            const [minPrice, maxPrice] = filtersState.priceRanges.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
        }

        setProducts(filteredProducts)

    }

    useEffect(() => {
        applyFilters()
    }, [filtersState])


    // clear the filters
    const clearFilters = () => {
        setFiltersState({
            category: 'all',
            color: 'all',
            priceRanges: ''
        })
    }

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>Browse a diverse range of categories.</p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* left side */}
                    <ShopFiltering
                        filters={filters}
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={clearFilters}
                    />

                    {/* right side */}
                    <div>
                        <h3 className='text-xl font-medium mb-4'>Products Available: {products.length}</h3>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopPage