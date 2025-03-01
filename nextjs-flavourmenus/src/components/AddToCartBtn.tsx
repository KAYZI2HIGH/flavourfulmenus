'use client'

import { useCart } from '@/context/CartContext'
import React from 'react'

type Props = {
  item: {
    _id: string,
    name: string,
    price: number,
    originalPrice?: number,
    image: string,
    discount?: string,
    code?: string,
    description?: string
  }
}

const AddToCartBtn = (props: Props) => {
  const {addToCart} = useCart()
  return (
    <button
          onClick={() => addToCart(props.item)}
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium cursor-pointer"
        >
          Add to Cart
        </button>
  )
}

export default AddToCartBtn