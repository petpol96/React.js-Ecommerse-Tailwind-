import React, { useRef, useState, useEffect } from "react";

export default function Products(props) {
  const [product, setProduct] = useState(0);
  const prevCategoryRef = useRef();
  //The app is on React Strict Mode so i will add a value to handle UseEffect double calling

  useEffect(() => {
    if (props.newCategory != 0) {
      fetch("https://fakestoreapi.com/products/category/" + props.newCategory)
        .then((res) => res.json())
        .then((json) => {
          setProduct(json);
        });
      props.changeNewCategory(0);
      props.updateFilters([props.newCategory]);
    } else {
      if (props.categories.length === 0) {
        console.log("Fetch All Products " + props.categories.length);
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => {
            setProduct(json);
          });
      } else {
        if (prevCategoryRef.current.length === 0) {
          fetch(
            "https://fakestoreapi.com/products/category/" + props.categories
          )
            .then((res) => res.json())
            .then((json) => {
              setProduct(json);
            });
        }
        if (prevCategoryRef.current.length !== 0) {
          console.log(
            prevCategoryRef.current.length + " " + props.categories.length
          );
          if (prevCategoryRef.current.length + 1 === props.categories.length) {
            fetch(
              "https://fakestoreapi.com/products/category/" +
                props.categories[props.categories.length - 1]
            )
              .then((res) => res.json())
              .then((json) => {
                setProduct([...product, ...json]);
              });
          } else if (
            prevCategoryRef.current.length ===
            props.categories.length + 1
          ) {
            setProduct(
              product.filter((a) => props.categories.includes(a.category))
            );
            console.log(product);
          }
        }
      }
    }
    prevCategoryRef.current = props.categories;
  }, [props.categories]);

  let renderHandler = () => {
    if (product != 0) {
      return product.map((product) => (
        <a key={product.id} href={product.href} className="group">
          <div className="aspect-w-1 aspect-h-1 w-full h-max overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={product.image}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              onClick={() => {
                props.changeProduct(product.id);
                props.changeScreen(1);
              }}
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900 bottom-0">
            {product.price}$
          </p>
        </a>
      ))
    }
  };
  return (
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {renderHandler()}
        </div>
      </div>

  );
}
