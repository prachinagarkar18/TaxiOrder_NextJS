"use client";
import React from 'react'
import { useState,useEffect,useContext } from 'react';
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from 'next/navigation';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';


export default function Booking () {
    
    const [inputHeight, setInputHeight] = useState(40); // Default height (fallback)
    const {carAmount,setCarAmount} = useContext(SelectedCarAmountContext);
    const [amount,setAmount]=useState();
    const router:any=useRouter()

    useEffect(() => {
        // Check if window is defined (client-side)
        const updateHeight = () => {
            if (typeof window !== "undefined") {
                const height = window.innerHeight * 0.82; // 10% of screen height
                setInputHeight(height);
                document.documentElement.style.setProperty('--input-height', `${height}px`);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        
        return () => window.removeEventListener("resize", updateHeight);
    }, []);
  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='border-[1px] p-5 rounded-md' style={{ height: inputHeight }}>
        <AutoCompleteAddress/>

        
        <Cars/>
        <Cards/>
        <button className={`w-full bg-yellow-400 p-1 rounded-md mt-4 ${!carAmount?'bg-gray-200':null}`}
        
        onClick={()=>router.push('/payment')}
        >Book</button>
        </div>
        
    </div>
    
  )
  
}

