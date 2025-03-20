import React, { use, useEffect, useState } from 'react'
import { Container, H3 ,Loading} from './style'
import img from '../../assets/wal.jpg'
import img2 from '../../assets/image.png'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Dropdown from '../../components/Dropdown'
import { getMusicData } from '../../utils/server'

function Home() {

    const [select, setSelect] = useState()
    function tanlow(url) {
        setSelect(url)
        localStorage.clear()
        localStorage.setItem('activess', url)
    }

    const { data, isLoading, error } = getMusicData()
    
    useEffect(() => {
        if (data && data.length > 0) {
            let loaclActive = localStorage.getItem('activess')
            setSelect(loaclActive || data[0].url)
        }
    }, [data])




    if (isLoading) return <Loading>Yuklanmoqda...</Loading>;
    if (error) return <h2>Xatolik yuz berdi: {error.message}</h2>;

    return (
        <div class="container">
            <Dropdown />
            <div data-aos="fade-down" class="card header">
                <h1>Alan walker</h1>
            </div>
            <div data-aos="flip-right" class="card sidebar" id="musiclist">
                {data?.map((item) => (
                    <H3 active={select === item?.url} key={item.id} onClick={() => tanlow(item.url)}>{item.id} {item.name}</H3>
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