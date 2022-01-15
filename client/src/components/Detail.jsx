import React, { useContext } from 'react'
import './home.css'
import { DetailContext } from '../Context'
import { Link } from 'react-router-dom'

function Detail() {
    const { songList } = useContext(DetailContext)
    {
        if (!songList.title) {
            return <div></div>
        }
        return (
            <div  className='mainContainer'>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to='/' style={{textDecoration:'none',color:'#222'}}>
                        <p className="navbar-brand">Home</p>
                        </Link>
                        <Link to='/allsongs' style={{textDecoration:'none',color:'#222'}}>
                        <p className="navbar-brand">All Songs</p>
                        </Link>
                    </div>
                </nav>
                <div className="card mb-3 detailsDiv">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={songList.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="card-title">{songList.title}</h5>
                                <p >{songList.tracknum} tracks</p>
                                <p>{songList.year}</p>
                                <p>{songList.genre}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {songList.songs.map((e) => (
                    <div key={e._id} className='songsList'>
                        <span>{e.name}</span>
                        <span>{e.singer}</span>
                        <span>{e.duration}</span>
                    </div>
                ))}
            </div>
        )
    }
}

export default Detail
