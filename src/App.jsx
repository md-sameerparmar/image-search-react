import { useState } from 'react';
import { LoadImages, SearchImages } from './components/API';
import Image from './components/Image';
import './App.css'

function App() {
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [pic, setPic] = useState();

  const data = LoadImages();
  const handleSearch = () => {
    setSearch(query);
    setPic(query);
  }

  const handleStatic = (statics) => {
    setSearch(statics);
    setPic(statics);
  }

  const handleReset = () => {
    setSearch();
    setPic();
  }
  const searchData = SearchImages(search);
  // console.log(searchData);
  return (
    <>
      <div className='search'>
        <input type='text' placeholder='Search images' onChange={(e) => {setQuery(e.target.value)}}/>
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className='static-button'>
        <p>Try below examples.</p>

        <button onClick={() =>{handleStatic('laptops')}}>Laptops</button>
        <button onClick={() =>{handleStatic('office')}}>Office</button>
        <button onClick={() =>{handleStatic('coffee')}}>Coffee</button>

        <h2>{pic}&nbsp;Pictures</h2>
      </div>

      <div className='contain'>
        {search? searchData.map((img, key)=>(
          <Image src={img.urls.thumb} key={key}/>
        )): data.map((img, key)=>(
          <Image src={img.urls.thumb} key={key}/>
        ))}
      </div>
    </>
  )
}

export default App
