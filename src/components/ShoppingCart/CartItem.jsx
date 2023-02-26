import {formatter} from '../../util/currency'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../features/cartSlice'

function CartItem({item}) {
    const dispatch = useDispatch()
  return (
    <div className='p-4'>
      <div className='flex font-roboto'>
        {/*Image*/}
        <div className='basis-1/3 flex justify-center items-center'>
            <img src={item.image} alt={item.title} className="w-[40%]" />
        </div>
        {/*Info*/}
        <div className='basis-2/3 flex flex-col'>
            <div>
                <h2>{item.title}</h2>
            </div>
            <div>
                <p>{formatter.format(item.price)}</p>
            </div>
            <div className='mt-auto'>
                <button onClick={()=>dispatch(removeFromCart(item))} className='bg-red-700 hover:bg-red-500 text-white py-2 px-4 rounded-md'>delete</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
