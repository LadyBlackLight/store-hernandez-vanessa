import React, { useContext, useState } from 'react';
import '../../App.css';
import { AppProvider } from '../../AppContext/AppContext';
import { AppContext } from '../../AppContext/AppContext';
import { Route, Switch } from "react-router-dom";
import Menubar from '../Menubar/Menubar';
import Hero from '../Hero/Hero';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import usePagination from '../Filters/Pagination/Pagination';
import ProductCard from '../ProductCard/ProductCard';

import History from '../Filters/History/History';

export default function Principal() {

    const { products } = useContext(AppContext);
    const { points } = useContext(AppContext);
    const [categorias, setCategorias] = useState("ver-todas");

    let [page, setPage] = useState(1);
    const PER_PAGE = 16;

    const count = Math.ceil(products.length / PER_PAGE);
    const _DATA = usePagination(products, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    let productos = products.map((product) => {
        return product.category;
    });

    let filtrado = productos.filter((elem, pos) => {
        return productos.indexOf(elem) === pos;
    });

    const handleCategoria = (e) => {
        setCategorias(e.target.value);
    };
    const filterCategorias = () => {
        let categoriasFiltrado = products.filter((categoria) => {
            if (categorias !== "ver-todas") {
                return categoria.category === categorias;
            }
            return categorias;
        })
        return categoriasFiltrado;
    }
    let filteresCategories = filterCategorias();
    const categoriasFiltrados = filteresCategories.map((categoria) => {
        return (
            <ProductCard
                key={categoria.name}
                imagen={categoria.img.url}
                categoria={categoria.category}
                nombre={categoria.name}
                precio={categoria.cost}
                id={categoria._id}
                points={points} />)
    })
    const paginationProducts = _DATA.currentData().map((producto) => {
        return (
            <ProductCard
                key={producto.name}
                imagen={producto.img.url}
                categoria={producto.category}
                nombre={producto.name}
                precio={producto.cost}
                id={producto._id}
                points={points} />
        )
    })
    return (
        <AppProvider>
            <>
                <Menubar />
                <main>
                    <Hero />
                    <Switch>
                        <Route exact path="/">
                            <Filters
                                filtrado={filtrado}
                                handleCategoria={handleCategoria}
                                categoria={categorias}
                                count={count}
                                page={page}
                                handleChange={handleChange}
                            />
                            <section className="products">
                                <div className="container">
                                    {categorias === "ver-todas" ? paginationProducts : categoriasFiltrados}
                                </div>
                            </section>
                        </Route>
                        <Route exact path="/historial">
                            <History />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </>
        </AppProvider>
    );
}
