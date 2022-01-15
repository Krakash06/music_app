import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import ShowAlbum from './ShowAlbum'
import { DetailContext } from '../Context'
import { Link } from 'react-router-dom'
function Home() {
    const [search, SetSearch] = useState('')
    const [searchFilter, setSearchFilter] = useState([])
    const [carddata, setCarddata] = useState([])
    const [byGenre, setByGenre] = useState([])
    const [page, setPage] = useState(1)
    const {songList,setsongList}=useContext(DetailContext)
    const handleChange = (e) => {
        SetSearch(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3003/album")
        const data = await res.json()

        data.filter(val => {
            if (search === '') {
                return
            }
            else if (val.title.toLowerCase().substring().includes(search.toLowerCase())) {
                setSearchFilter([val])
                SetSearch('')
            }
        })
    }
    const getData = async () => {
        let res = await fetch(`http://localhost:3003/album?page=${page}&size=${3}`)
        let data = await res.json()
        setCarddata(data)
    }

    const handleSortGenre = async (e) => {
        const res = await fetch("http://localhost:3003/album")
        const data = await res.json()
        const updated1 = data.filter((el) => {
            if (e.target.value === el.genre) {
                return el
            }

        });
        setSearchFilter([])
        setByGenre(updated1)
    };

    useEffect(() => {
        getData()
    }, [page, songList])

    return (
        <div>
            <div className='mainContainer'>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to='/' style={{textDecoration:'none',color:'#222'}}>
                        <p className="navbar-brand">Home</p>
                        </Link>
                        <Link to='/allsongs' style={{textDecoration:'none',color:'#222'}}>
                        <p className="navbar-brand">All Songs</p>
                        </Link>
                        <form className="d-flex" onSubmit={handleSubmit}>
                            <input className="form-control me-2"
                                type="search" placeholder="Search"
                                aria-label="Search"
                                value={search}
                                onChange={handleChange} />
                            <button className="btn btn-outline-success"
                                type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                {/* Sorting By Genre */}
                <div className="dropdown sortByGenre">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By Genre
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <button value={"Action"} className="dropdown-item" onClick={handleSortGenre}>Action</button>
                        <button value={"Story"} className="dropdown-item" onClick={handleSortGenre}>Story</button>
                        <button value={"Song"} className="dropdown-item" onClick={handleSortGenre}>Song</button>
                    </ul>
                </div>

                {/* cards */}
                <ShowAlbum carddata={(searchFilter.length!==0)? searchFilter:(byGenre.length !== 0) ? byGenre : carddata} setsongList={setsongList}></ShowAlbum>
            </div>
            <nav aria-label="Page navigation example " style={{ marginTop: "10px" }}>
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <p className="page-link">Previous</p>
                    </li>
                    <li className="page-item"><p className="page-link" onClick={() => { setPage(1); setSearchFilter([]) }}>1</p></li>
                    <li className="page-item"><p className="page-link" onClick={() => { setPage(2) }}>2</p></li>
                    <li className="page-item"><p className="page-link" onClick={() => { setPage(3) }}>3</p></li>
                    <li className="page-item">
                        <p className="page-link" onClick={() => { setPage(prev => prev + 1) }}>Next</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home
