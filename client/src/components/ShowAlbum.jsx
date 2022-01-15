import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
function ShowAlbum({ carddata, setsongList }) {
    return (
        <div>
            <div className='cardMain'>
                {carddata.map((e) => (
                   <Link to='/albums'  key={e._id} style={{textDecoration:'none',color:'#222'}}>
                    <div className="card"onClick={() => {
                        setsongList(e)
                    }}>
                        <img src={e.image} className="card-img-top" alt="..." />
                        <div className="card-body text-start">
                            <p >{e.title}</p>
                            <p >{e.songs.length} track</p>
                            <p>{e.year}</p>
                            <p>{e.genre}</p>
                        </div>
                    </div>
                   </Link>
                ))}
            </div>
        </div>
    )
}

export default ShowAlbum
