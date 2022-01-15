import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './home.css'
function AllSongs() {
    const [allSong, setAllSong] = useState([])

    const getData = async () => {
        let res = await fetch('http://localhost:3003/songlist')
        let data = await res.json()
        setAllSong(data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='mainContainer'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' style={{ textDecoration: 'none', color: '#222' }}>
                        <p className="navbar-brand">Home</p>
                    </Link>
                    <Link to='/allsongs' style={{ textDecoration: 'none', color: '#222' }}>
                        <p className="navbar-brand">All Songs</p>
                    </Link>
                </div>
            </nav>
            <li className="list-group-item bg-secondary allsongs ">
                    <span>Sl No.</span>
                    <span>Name</span>
                    <span>Singer</span>
                    <span>Duration</span>
                </li>
            <ol className="list-group list-group-numbered ">
                
                {allSong.map((e) => (
                    <li className="list-group-item allsongs" key={e._id}>
                        <span>{e.name}</span>
                        <span>{e.singer}</span>
                        <span>{e.duration}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default AllSongs
