import Head from 'next/head'
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../components/config/config'
import { useEffect, useState } from 'react'


// components
import HomeContents from '../components/home/Index'
export default function Home() {
  const [data, setData] = useState("")

  const getData = async() =>{
    const data = await getDocs(collection(db, "logins"))
    setData(
      data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    )
  }
  useEffect(()=>{
getData()
  },[])
console.log(data)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContents />
    </>
  )
}
