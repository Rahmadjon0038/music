import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getMusicdata = async () => {
    const { data } = await axios.get('http://localhost:3000/musics')
    return data
}
export const getMusicData = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getMusicdata,
    })
}