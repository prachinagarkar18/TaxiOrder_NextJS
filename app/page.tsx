'use client'
import { useEffect,useState } from "react";
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import Image from "next/image";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCordiContext } from "@/context/SourceCordContext";
import { DestinationCordiContext } from "@/context/DestinationCordContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const [userlocation,setUserLocation]=useState<any>();
  const [sourceCordinates,setSourceCordinates]=useState<any>([]);
  const [destinationCordinates,setDestinationCordinates]=useState<any>();
  const [directionData,setDirectionData]=useState<any>([]);
  const [carAmount,setCarAmount]=useState<any>([]);

  useEffect(()=>{
      getUserLocation();
    },[])
    const getUserLocation=()=>{
      navigator.geolocation.getCurrentPosition(function(pos){
        setUserLocation({
          lat:pos.coords.latitude,
          lng:pos.coords.longitude
        })
      })
    }
  
  return (
  <div>
  
    <UserLocationContext.Provider value={{userlocation,setUserLocation}}>
      <SourceCordiContext.Provider value={{sourceCordinates,setSourceCordinates}}>
      <DestinationCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
      <DirectionDataContext.Provider value={{directionData,setDirectionData}}>
      <SelectedCarAmountContext.Provider value={{carAmount,setCarAmount}}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="">
            <Booking/>
        </div>
        <div className="col-span-2 ">
          <MapBoxMap/>
        </div>
      </div>
      </SelectedCarAmountContext.Provider>
      </DirectionDataContext.Provider>
      </DestinationCordiContext.Provider>
      </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
  </div>
  );
}
