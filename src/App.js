import React, { useContext, useState } from 'react';
import './App.css';
import { AppProvider } from './Components/AppContext/AppContext';
import { AppContext } from './Components/AppContext/AppContext';
import Menubar from './Components/Menubar/Menubar';
import Hero from './Components/Hero/Hero';
import Filters from './Components/Filters/Filters';
import ProductCard from './Components/ProductCard/ProductCard';

function App() {
  const { products } = useContext(AppContext);
  const { points, setPoints } = useContext(AppContext);
  const [categorias, setCategorias] = useState("ver-todas");

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
  return (
    <AppProvider>
      <div className="App">
        <Menubar />
        <Hero />
        <Filters
          filtrado={filtrado}
          handleCategoria={handleCategoria}
          categoria={categorias}
        />
        <div className="products">
          <div className="container">
            {categoriasFiltrados}
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
