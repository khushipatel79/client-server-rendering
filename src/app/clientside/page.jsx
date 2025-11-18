"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import  Link  from "next/link"

const clientPage = () => {
    const [data , setdata] = useState([])
    
    const getData = async() =>{
       const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
       setdata(res.data)
       console.log(res.data);
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <>
        <h1>client page</h1>
        <Link href="/"><button>back</button></Link>

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item , index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default clientPage
