import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CartEmpty = () => {
  return (
    <><div>
        <img 
        src={emptybag}
        alt="emptybag/img"
        className=' '/>
        <button type='button' className=''>
            <ArrowLeftIcon className=''/>
            <span className=''> Back To Nike Store</span>
        </button>
    </div>


    </>
  )
}

export default CartEmpty;