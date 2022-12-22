import React from 'react';
import { toDollars } from '../lib';

const styles = {
  product: {
    display: 'block',
    cursor: 'pointer'
  },
  image: {
    height: '300px',
    objectFit: 'contain'
  },
  description: {
    height: '4.5rem',
    overflow: 'hidden'
  }
};

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="container">
        <h1>Catalog</h1>
        <hr />
        <div className="row">
          {
            this.state.products.map(product => (
              <div key={product.productId} className="col-12 col-md-6 col-lg-4">
                <Product product={product} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

function Product(props) {
  // eslint-disable-next-line no-unused-vars
  const { productId, name, price, imageUrl, shortDescription } = props.product;
  /* this anchor should go to product details at `#products?productId=${productId}` */
  return (
    <a
      href={`#products?productId=${productId}`}
      style={styles.product}
      className="text-dark card mb-4 shadow-sm text-decoration-none">
      <img src={imageUrl} className="card-img-top" alt={name} style={styles.image}/>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text text-secondary">{ toDollars(price) }</p>
        <p className="card-text" style={styles.description}>{ shortDescription }</p>
      </div>
    </a>
  );
}
