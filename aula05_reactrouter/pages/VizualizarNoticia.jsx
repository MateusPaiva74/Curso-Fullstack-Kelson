import React from 'react'
import {useParams} from 'react-router-dom'

const VizualizarNoticia = () => {

    const{id} = useParams
    const [noticia, setNoticia] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/noticia`)
        .then(response => {
            setNoticias(response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }, [])

  return (
    <div>VizualizarNoticia</div>
  )
}

export default VizualizarNoticia