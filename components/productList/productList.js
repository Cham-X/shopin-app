import { useGlobalContext } from '../../Contexts/globalContext'
import Categories from '../Categories/Categories';
import ItemList from '../ItemList/ItemList'


const ProductList = () => {
  const { product } = useGlobalContext();
  return (
  <section>
    <Categories/>
      <ItemList data={product} />
    </section>
  );
}

export default ProductList
