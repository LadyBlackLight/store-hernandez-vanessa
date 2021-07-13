import React from 'react';
import './filters.css';

import ProductCounter from './ProductCounter/ProductCounter';
import Category from './Category/Category';

export default function Filters(props) {

    return (
        <div className="filters">
            <div className="container">
                <div className="filters-container">
                    <ProductCounter />
                    <p className="by">Sort by:</p>
                    <Category
                    key={props.categoria}
                    filtrado={props.filtrado}
                    handleCategoria={props.handleCategoria}
                    categoria={props.categoria}
                    />
                </div>
            </div>
        </div>
    )
}
