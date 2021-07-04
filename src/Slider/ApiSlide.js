import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios';

export default function ApiSlide() {

  const [apiData, setApiData] = useState([]);

  const [thirdSliderName, setThirdSliderName] = useState('');
  const [thirdSliderRegion, setThirdSliderRegion] = useState('');

  const fetchRequest = useCallback(() => {
    const url = "https://www.anapioficeandfire.com/api/houses";

    axios.get(url).then((d) => {
      setApiData(d.data);

      let randomNum = Math.floor(Math.random() * d.data.length);
      setThirdSliderName(d.data[randomNum].name);
      setThirdSliderRegion(d.data[randomNum].region);
      });
      }, []);
  
      useEffect(fetchRequest, [fetchRequest]);

  return (
    <>
    <div className='clickRefreshContainer'
    >
      <h1>Click and find out.</h1>
      <button
        style={{ zIndex: "2", borderRadius: "3px" }}
        onClick={fetchRequest}
      >
        Click to refresh
      </button>
    </div>   
        <div className="apiSlider"
        >
            <div className='apiSliderInner'           
            >
                name: {thirdSliderName}
               <div>
             
              </div>
              <div>
                region: {thirdSliderRegion}
             
              </div>
            </div> 
          </div>
    </>
  )
}
