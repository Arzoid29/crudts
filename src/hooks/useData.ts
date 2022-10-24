import { useCallback, useEffect} from 'react';
import { getAllProducts } from '../apis';
import useStore from '../store';

export const useData = () => {
    const store = useStore()

    const getInitialData = useCallback(async () => {
      const result: any = await getAllProducts();
      store.getInitialData(result)
    }, [])
    
    useEffect(() => {
      getInitialData()
    }, [])

}
