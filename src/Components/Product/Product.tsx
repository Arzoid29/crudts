import { IItem } from "../../interfaces";
import  useStore  from "../../store";
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
        <button onClick={() => {store.eliminateProduct(item)}}>Eliminate</button>
      </td>
    </tr>
  );
};
