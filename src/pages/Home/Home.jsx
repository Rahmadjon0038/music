import React, { useEffect, useState } from 'react'
import { Container } from './style'
import img from '../../assets/wal.jpg'
import img2 from '../../assets/image.png'
import axios from 'axios'
import Dropdown from '../../components/Dropdown'

function Home() {


    const [data, setData] = useState([
    ])
    const [select, setSelect] = useState()
    function tanlow(url) {
        setSelect(url)
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
                <Dropdown />
            <div data-aos="fade-down" class="card header">
                <h1>Alan walker</h1>
            </div>
            <div data-aos="flip-right" class="card sidebar" id="musiclist">
                {data?.map((item) => (
                    <h3 key={item.id} onClick={() => tanlow(item.url)}>{item.id} {item.name}</h3>
                ))}
            </div>
            <div data-aos="zoom-in" class="card main">
                <iframe width="560" height="315" src={select} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div data-aos="flip-left" class="card sidebar"><img src={img} alt="img" /></div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="card footer">
                <h2>Uthor:Rahmadjon Abdullayev</h2>
            </div>
        </div>

    )
}

export default Home