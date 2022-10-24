import { IItem } from "../../interfaces";
import  useStore  from "../../store";
import { useState } from "react"
interface Props {
  item: IItem;
}

export const Product = ({ item }: Props) => {
  const store = useStore()

  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>
        <button  className="eliminate" onClick={() => {store.eliminateProduct(item)}}>Eliminate</button>
      </td>
      <td><button className="edit" onClick={() => {
          store.updateProduct(item);
          store.changeEditMode(true);
          store.product.title = item.title;
          store.product.description = item.description;
          store.product.price = item.price;
        }}>Editar </button></td>
    </tr>
  );
};
