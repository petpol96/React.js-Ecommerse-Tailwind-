import React from 'react'
import SpaHeader from './SpaHeader'
import ViewProduct from './ViewProduct'
import { useState } from 'react'
import ListProducts from './ListProducts'
function Spa() {
  const [screen,setScreen]=useState(0)
  const [productView,setProductView]=useState(0)
  const [category,setCategory]=useState(0)


  const screenHandler =()=>{
    switch(screen){
      case 0:
        return <ListProducts changeScreen={setScreen} changeProduct={setProductView} changeCategory={setCategory}  category={category}/>
        break;
      case 1:
        return <ViewProduct changeScreen={setScreen} product={productView} changeCategory={setCategory} />
        break;
    }

  }
  return (
        <div>
            <SpaHeader changeScreen={setScreen} />
            {screenHandler()}
        </div>
  )
}

export default Spa