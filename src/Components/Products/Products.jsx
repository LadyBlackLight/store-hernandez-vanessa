import React, { useContext } from 'react';
import './products.css';
import { AppContext } from '../AppContext/AppContext';
import ProductCard from './ProductCard/ProductCard';

export default function Products() {
    const { products } = useContext(AppContext);
    const {points, setPoints} = useContext(AppContext);

    return (
        <div className="products">
            <div className="container">
            {products.length > 0 ? (
                products.map((product) => {
                    return <ProductCard key={product.name} imagen={product.img.url} categoria={product.category} nombre={product.name} precio={product.cost} points={points} />;
                })
            ) : (
                <div>loading...</div>
            )}
            </div>
        </div>
    )
}
