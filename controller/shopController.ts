let count = 0;

export const arr: Array<{
  id: number;
  productName: string;
  price: number;
  quantity: number;
}> = Array.from({ length: 5 }, () => {
  count++;
  return {
    id: count,
    productName: Math.ceil(Math.random() * 2000).toString(),
    price: Math.ceil(Math.random() * 2000),
    quantity: Math.ceil(Math.random() * 4),
  };
});

export const createProduct = (val: {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}) => {
  arr.push(val);

  return val;
};

export const viewProducts = () => {
  return arr;
};

export const updateProductName = (id: number, productName: string) => {
  arr.find((el) => el.id === id)!.productName = productName;
  return arr.find((el) => el.id === id);
};

export const deleteProduct = (id: number) => {
  return arr.filter((el) => el.id !== id);
};

export const getOneProductById = (id: number) => {
  return arr.find((el) => el.id === id);
};
