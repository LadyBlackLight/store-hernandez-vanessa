import React from "react";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [points, setPoints] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
      const headers = {
          "Content-type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
      };
      let peticion = fetch("https://coding-challenge-api.aerolab.co/products", { method: "GET", headers });
      peticion
          .then((respuesta) => {
              return respuesta.json();
          })
          .then((data) => {
              console.log(data)
              setProducts(data)
          });
  }, []);

  
  useEffect(() => {
    const headers = {
        "Content-type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
    };
    let peticion = fetch("https://coding-challenge-api.aerolab.co/user/me", { method: "GET", headers });
    peticion
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            console.log("User", data)
            setUser(data.name);
            setPoints(data.points)
        });
}, []);

  return (
    <AppContext.Provider value={{ products, setProducts, points, setPoints, user, setUser }}>
      {props.children}
    </AppContext.Provider>
  );
};