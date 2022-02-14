import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../../../Product/Product';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://obscure-sierra-48545.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        <div className=" mb-5">
          <h2 className="fw-bold">Our Product </h2>
        </div>
        <div>
          <Row xs={1} sm={2} md={3} className="g-4 bg-white rounded-3">
            {products.map((product, index) => {
              if (index < 6) {
                return <Product key={product._id} product={product}></Product>;
              }
            })}
          </Row>
        </div>
      </div>
    );
  }
};

export default Products;
