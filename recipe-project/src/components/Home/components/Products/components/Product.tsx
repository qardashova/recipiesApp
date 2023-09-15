import React from 'react'
import './Product.scss'
import food from '../../../assets/food.jpg'
import { fetchRecipeById } from '../../../../../redux/reducer/detailsReducer'
import { useDispatch } from 'react-redux'

type ProductProps = {
  productId:number,
  image: string,
  title: string,
}

const Product = ({image,title,productId}:ProductProps) => {

  const dispatch = useDispatch();

  function sendId(){
    dispatch(fetchRecipeById(productId))
  }

  return (
    <div className='Product' onClick={sendId}>
      <div className='product-image' style={{backgroundImage: `url(${image})` }}>
      </div>
      <h3 className='product-name'>{title}</h3>
    </div>
  )
}

export default Product
