import React, { Component, useState, useEffect  } from 'react'
import axios from 'axios'

class SearchProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseUrl: '',

        }
    
        
        const [allData, setAllData] = useState([]);
        const [filteredData, setFilteredData] = useState(allData);
        
        const handleSearch = (event) => {
            
        }
        
        useEffect(() => {
            
            axios('https://jsonplaceholder.typicode.com/albums/1/photos')
            
            .then(res => {
                console.log(res.data)
                setAllData(res.data)
                setFilteredData(res.data)
            })
            
            .catch(error => {
                console.log('Error getting fake data: ' + error)
            })
            
        }, [])
    }

    render() {
        return(
            <>
            <h1>SearchProfile!</h1>
            </>
        )
    }

}


export default SearchProfile