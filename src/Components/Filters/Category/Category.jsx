import React from 'react';
import './category.css';

export default function Category(props) {

    return (
        <div className="category-filter">
            <select key={props.categoria}
             onChange={props.handleCategoria}
             value={props.categoria}
             className="filter"
             name="categories"
             id="categoria">

                <option value="ver-todas">All categories</option>
                {props.filtrado.map((categoria)=>{
                    return <option key={categoria} value={categoria}>{categoria}</option>
                })}
            </select>
        </div>
    )
}
