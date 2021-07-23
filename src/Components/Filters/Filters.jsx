import React from 'react';
import './filters.css';
import { Pagination } from "@material-ui/lab";
import ProductCounter from './ProductCounter/ProductCounter';
import Category from './Category/Category';

export default function Filters(props) {

    return (
        <section className="filters">
            <div className="container">
                <div className="filters-container">
                    <ProductCounter />
                    <Category
                        key={props.categoria}
                        filtrado={props.filtrado}
                        handleCategoria={props.handleCategoria}
                        categoria={props.categoria}
                    />
                    <Pagination
                        count={props.count}
                        size="large"
                        page={props.page}
                        variant="outlined"
                        shape="rounded"
                        onChange={props.handleChange}
                    />
                </div>
            </div>
        </section>
    )
}
