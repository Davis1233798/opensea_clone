import React from 'react';
import './App.css';
// import CollectionCard from './components/CollectionCard';
//import Footer from './components/Footer'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Watsonlist from './components/Watsonlist'
import Main from './components/Main'
//yarn add axios to control data from ipfs
//axios call api格式: testnets-api.opensea.io/assets/assets_contract_address=圖組link& order_direction=asc
//*此處須使用localhost:3000 進行頁面開啟 使用127.0.0.1:3000會造成CROS ERROR
function App() {
  const [watsonListData, setWatsonListData] = useState([])
  //Hook 從watsonListDate取得狀態 並傳入usestate 輸出setWatsonListData

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x7C22279E9E31904BD6603727324d7Fa4e3968472&order_direction=desc'
      )
      console.log(openseaData.data.assets)
      setWatsonListData(openseaData.data.assets)
    }
    getMyNfts()
  }, [])

  return (<div className='app' >
    <Header />
    <Main />
    <Watsonlist watsonListData={watsonListData} />
  </div>

  )
}

export default App;