import React, { useEffect, useState } from 'react'
import { Images } from './components'

const App = () => {

  const [images, setImages] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos").then(
      response => response.json().then(data => {
        setImages(data)
      })
    )

  }, [])


  return <div>
    <Images data={images} />
  </div>
}

export default App