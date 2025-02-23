import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'

const backend = import.meta.env.BACKEND_URL;

const Verify = () => {

    const {navigate, token , setCartItems , backendUrl} = useContext(ShopContext)
    const [searhParams , setSearchParams] = useSearchParams()

    const success = searhParams.get('success')
    const orderId = searhParams.get('orderId')

    const verifyPayment = async () => {

        try {
            if (!token) {
               return null 
            }
       
            const response = await axios.post(backendUrl + '/api/order/verifyStripe',{success,orderId},{headers:{token}})


            if(response.data.success){
                setCartItems({})
                navigate('/orders')
            }else{
                navigate('/cart')
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=>{
       verifyPayment()
    },[token])
  return (
    <div>
      
    </div>
  )
}

export default Verify
