import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Item from '../Item/Item';
import NOTFOUND from "./notfound.png"

const Items = () => {
const [capsules,setCapsules] = useState([]);
const [filter,setFilter] = useState([]);
const [search,setSearch] = useState('');

const categories =  [
    {
    status:"retired"
    },
    {
     status:"unknown"
    },
    {
     status:"active"
    },
    {
     status:"destroyed"
    },
       
]

const fetchData = async () => {
    try {
        const response = await axios.get("https://api.spacexdata.com/v4/capsules");
        if(response.status === 200 && response.data.length > 0) {
            setCapsules(response.data);
            setFilter(response.data) 
        } else if(response.status === 200 && response.data.length === 0 ) {
            setCapsules([]);
        } 
        return response.data;
    } catch (error) {
     console.log(error);   
    }
    }

useEffect(()=>{
fetchData();
},[]);

const handleCategory = (category) => {
    if (category === 'all') {
        // setMainData(mainData);
         setCapsules(filter);
         return;
      }
      const newItems = filter.filter((main) => main.status === category);
      setCapsules(newItems);
  
  }

const allcategories = ['all', ...new Set(categories?.map((main)=> main.status))]

  return (
    <div className='max-w-4xl xl:max-w-6xl mx-auto'>
      <div className='max-w-[1640px] m-auto px-4 py-12'>
     <div className='flex flex-col lg:flex-row gap-2 justify-between'>
      {/* search  */}
      <div className="px-4 flex">
    <input
      className="w-80 p-3 md:text-sm rounded-3xl outline-none border placeholder:text-[blue] text-base" 
      type="text"
      name="text"
      placeholder="search capsule using serial no"
      onChange={(e)=>setSearch(e.target.value)}
    />
    {/* <button
      type="submit"
      className="text-[#F7F7F7] w-28  p-2 bg-[#40AA54] ml-[-30px] md:ml-[-50px] rounded-3xl"
    >
      search
    </button> */}
  </div>

  {/* filter buttons */}
    <div className='max-w-[1640px] flex justfiy-between flex-wrap'>
      {allcategories?.map((cate,index)=>{
       return <button className='m-1 border p-1 rounded-lg border-[blue] text-[blue] hover:bg-[blue] hover:text-[#F7F7F7]' onClick={() => handleCategory(cate)} key={index}>{cate}</button>
      })}
    </div>
     </div>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
         {
          capsules?.length === 0 ? (
            <div className='flex flex-col justify-center items-center'>
              <img src={NOTFOUND} alt='alt'/>
              <p>capsules not found</p>
            </div>
          ) : (
          // eslint-disable-next-line array-callback-return
          capsules?.filter((prod)=>{
           if(search === "") {
            return prod
           } else if(prod.serial?.toLowerCase().includes(search.toLowerCase())) {
            return prod;
           }
          }).map((capsule,index)=> {
            return <Item key={index} capsule={capsule}/>
          })
          )
         }

        </div>
      </div>
    </div>
  )
}

export default Items