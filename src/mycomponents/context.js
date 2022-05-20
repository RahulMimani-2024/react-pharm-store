// context API is used for the purpose of storing and serving the data

import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();
//It comes with two components
// provider
//consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartsubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    // console.log(`hello from add to cart.Id is ${id}`);
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  // since the objcets in javascripts are passed by refernece so change in product will reflect in data.js
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let temp = [];
    storeProducts.forEach((item) => {
      const singleitem = { ...item };
      temp = [...temp, singleitem];
    });
    this.setState(() => {
      return { products: temp };
    });
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increament = (id) => {
    let tempcart = [...this.state.cart];
    const selectedproduct = tempcart.find((item) => item.id === id);
    let index = tempcart.indexOf(selectedproduct);
    const product = tempcart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    this.setState(
      () => {
        return { cart: [...tempcart] };
      },
      () => {
        this.addTotal();
      }
    ); 
  };

  decreament = (id) => {
    let tempcart = [...this.state.cart];
    const selectedproduct = tempcart.find((item) => item.id === id);
    let index = tempcart.indexOf(selectedproduct);
    const product = tempcart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;
      this.setState(
        () => {
          return { cart: [...tempcart] };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempproduct = [...this.state.products];
    let tempcart = [...this.state.cart];
    tempcart = tempcart.filter((item) => item.id !== id);
    const index = tempproduct.indexOf(this.getItem(id));
    let removedproduct = tempproduct[index];
    removedproduct.inCart = false;
    removedproduct.count = 0;
    this.setState(
      () => {
        return {
          cart: [...tempcart],
          products: [...tempproduct],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subtotal += item.total));
    const temptax = subtotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subtotal + tax;
    console.log(total);
    this.setState(() => {
      return {
        cartTax: tax,
        cartsubTotal: subtotal,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increament: this.increament,
          decreament: this.decreament,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
