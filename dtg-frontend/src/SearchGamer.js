import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SearchGamer() {

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState(allData)

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase()
    let result = []

    result = allData.filter((data) => {
      return data.title.search(value) !== -1
    })
    setFilteredData(result)
  }

  useEffect(() => {

    axios('https://jsonplaceholder.typicode.com/albums/1/photos')

    .then(response => {
      console.log(response.data)
      setAllData(response.data)
      setFilteredData(response.data)
    })

    .catch(error => {
      console.log('Error getting fake data: ' + error)
    })

  }, [])

  const styles = {
    display:'inline',
    width:'30%',
    height:50,
    float:'left',
    padding:5,
    border:'0.5px solid black',
    marginBottom:10,
    marginRight:10
    }

  return (
    <div className="SearchGamer">
      <div style={{ margin: '0 auto', marginTop: '10%' }}>
        {/* <form onSubmit={(event) =>handleSearch(event)}> */}
          <input 
          type="text" 
          onChange={(event) =>handleSearch(event)} 
          placeholder='search gamer'
          />
          {/* <input 
            type='submit'
            value='search gamer'
          />
        </form> */}
      </div>

      {/* below should be a separate component */}
      <div style={{padding:10}}>
        {filteredData.map((value,index)=>{
        return(
          <div key={value.id + 1}>
            <div style={styles} key={value.id}>
            {value.title}
            </div>
          </div>
        )
        })}
      </div>
    </div>
  );
}

export default SearchGamer;