const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1000,
    category: "celular",
    img: "https://synnexfpt.com/wp-content/uploads/2022/06/Apple-iPhone-12-Tim-6.jpg",
    stock: 25,
    description: "Descripcion de iphone12",
  },
  {
    id: "2",
    name: "Samsung S23",
    price: 800,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_846004-MLA53452158229_012023-O.jpg",
    stock: 25,
    description: "Descripcion de Samsung S23",
  },
  {
    id: "3",
    name: "Xiaomi 12T pro",
    price: 600,
    category: "celular",
    img: "https://cdn.dxomark.com/wp-content/uploads/medias/post-130217/Xiaomi-12T-Pro-featured-image-packshot-review.jpg",
    stock: 15,
    description: "Descripcion de Xiaomi 12T pro",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
