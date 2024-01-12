import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopContext'
import Breadcrums from '../Components/Breadcrums/breadcrums';
import { useParams } from 'react-router-dom';
import ProuctDisplay from '../Components/ProductDisplay/productDisplay';
import DescriptionBox from '../Components/DescriptionBox/descriptionBox';
import RelatedProducts from '../Components/RelatedProducts/relatedProducts';
function Product() {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={product} />
      <ProuctDisplay  product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
      
    </div>
  )
}

export default Product
