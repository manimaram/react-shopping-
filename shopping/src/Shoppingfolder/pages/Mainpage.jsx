import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents , Ladies } from '../data'
import Womencollection from '../components/Womencollection'

const MainPage = () => {
        const[Gentsfashion,setGentsfashion ] = useState(Gents)
        const[Ladiesfashion,setLadiesfashion] = useState(Ladies)
        console.log(Gents)

  return (
    <div>
        <Header />
        <Banner />
        <Collections Gentsfashion = {Gentsfashion}/>
        <Womencollection Ladiesfashion = {Ladiesfashion}/>
        <Footer />

        

    </div>
  )
}

export default MainPage