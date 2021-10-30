import React, {useState, useEffect} from 'react'
import axios from 'axios'

let baseURL = process.env.REACT_APP_BASEURL

function SearchGamer() {

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState(allData)

  const handleSearch = (event) => {
    let value = event.target.value
    let result = []

    result = allData.filter((data) => {
      return data.name.search(value) !== -1
    })
    setFilteredData(result)
  }

  useEffect(() => {

    axios.get(baseURL + '/users', {
      withCredentials: true
    })

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
    width:163,
    height:190,
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
          /><aside style={{fontSize:15}}>**names are case sensitive</aside>
          {/* <input 
            type='submit'
            value='search gamer'
          />
        </form> */}
      </div>

      {/* below should be a separate component */}
      <div style={{padding:10}}>
        {filteredData.map((value, index)=>{
        return(
          <div key={index}>
            <div style={styles}>
            {value.name}<br />
            <img src={value.profilePic} alt={value.profilePic} style={{width: 150}}/>
            </div>
          </div>
        )
        })}
      </div>
    </div>
  );
}

export default SearchGamer;
