import { Styles } from './Table.css'
import { IItem } from '../../interfaces'
import {Product} from '../Product/Product'
import useStore from '../../store'

export function Table()   {
  const store = useStore()

  return (
    <Styles>
      <table>
        <thead>
          <tr>
            <th scope='col'>Product Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Price</th>
            </tr>
        </thead>
        <tbody>
          {store.products.map((item: IItem, key: number) => {
            return <Product item={item} key={key} />
          })}
        </tbody>
       
      </table>
    </Styles>
  )
}
