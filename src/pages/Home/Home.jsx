import React, { useEffect, useState } from 'react'
import { Container } from './style'
import img from '../../assets/wal.jpg'
import img2 from '../../assets/image.png'
import axios from 'axios'

function Home() {

    const [data, setData] = useState([
    ])
    const [select, setSelect] = useState("https://www.youtube.com/embed/1-xGerv5FOk")
    function tanlow(url) {
        setSelect(url)
    }

    const [newName, setNewname] = useState("")
    const [newUrl, setNewUrl] = useState("")


    const addmusic = () => {
        const newData = { id: data.length + 1, name: newName, url: newUrl }
        const response = [...data, newData]
        setData(response)
        localStorage.setItem('musicdata', data)
    }

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/musics')
            console.log(response.data)
            setData(response.data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div class="container">
            <div class="card header">
                <h1>Alan walker</h1>
            </div>
            <div class="card sidebar" id="musiclist">
                <h3 onClick={addmusic}>Add</h3>
                {data?.map((item) => (
                    <h3 key={item.id} onClick={() => tanlow(item.url)}>{item.id} {item.name}</h3>
                ))}
            </div>
            <div class="card main">
                <iframe width="560" height="315" src={select} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="card sidebar"><img src={img} alt="img" /></div>
            <div class="card footer">

            </div>
            {/* <input onChange={(e) => setNewname(e.target.value)} type="text" name="nomi" placeholder='nomi' />
            <input onChange={(e) => setNewUrl(e.target.value)} type="text" name="url" /> */}
        </div>
    )
}

export default Home