import React, { useState } from 'react'
import './Category.scss'
import { useDispatch } from 'react-redux'
// import { fetchRecipesBycategory } from '../../../../../redux/reducer/recipeReducer'
import { fetchAllRecipes,setObjFilter } from '../../../../../redux/reducer/recipeReducer'
import { AppDispatch } from '../../../../../redux/store/store'

type categoryType = any

const Category = ({categoryName}:categoryType) => {

  // const [active,setActive] = useState(false)
  const dispatch = useDispatch<AppDispatch>();

  function selectCategory(){
    dispatch(setObjFilter({name: "cuisine",value: categoryName }))
    
    // setActive((prev)=> !prev)
  }

  // let id={active ? 'active' : ""}

  return (
    <div className='Category' onClick={selectCategory}>
      <p>{categoryName}</p>
    </div>
  )
}

export default Category
