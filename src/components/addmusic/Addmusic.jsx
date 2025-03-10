import React, { useState } from "react";
import { FOMR, Container } from './style'
import axios from "axios";
function Addmusic() {
    const [data, setData] = useState([])


    let [name, setName] = useState('')
    let [url, setUrl] = useState('')


    const addMusicsData = async (newData) => {
        try {
            const response = await axios.post('http://localhost:3000/musics', newData)
            console.log(response.status)

        }
        catch (err) {
            console.log(err)
        }

    }

    const addData = (e) => {
        const newData = {
            name,
            url
        }
        addMusicsData(newData)
        setName('')
        setUrl('')
    }

    return (
        <Container>
            <FOMR onSubmit={addData}>
                <h1>Yangi Musiqa qo'shish</h1>
                <label>
                    <span>Musiqa nomi</span>
                    <input required onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="musiqa nomini kiriting" />
                </label>
                <label>
                    <span>Musiqa linki</span>
                    <input required onChange={(e) => setUrl(e.target.value)} name="url" type="text" placeholder="musuqa url kiriting" />
                </label>
                <div className="btn">
                    <button  >Musiqani qoshish</button>
                </div>
            </FOMR>
        </Container>
    )
}
export default Addmusic