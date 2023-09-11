import { useEffect, useState } from 'react'
import './App.css'
import ArtCard from './Components/artCard'
import { getSingleArt } from './api/fetchArt'

function App() {
const [link, setLink] = useState("")

  useEffect(() => {
    getSingleArt(437133)
    .then((data) => {
      setLink(data.primaryImage)
    }
    )
  })

  return (
    <>
    <ArtCard link = {link}/>
    </>
  )
}

export default App
