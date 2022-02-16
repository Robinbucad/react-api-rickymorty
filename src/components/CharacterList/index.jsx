import { useState } from "react";
import { useEffect } from "react";
import CharacterCard from "../CharacterCard";
import './style.css'

function CharacterList() {

    const [info, updateNextInfo] = useState({})

    const initialUrl = `https://rickandmortyapi.com/api/character`

    const fetchCharacters = (url) => {
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setCharacters(data.results)
                updateSegundoFilter(data.results)
                updateFiltered(data.results)

                updateNextInfo(data.info)

                console.log(data)
            })

    };

    const next = () => {
        fetchCharacters(info.next)
    }

    const previous = () => {
        fetchCharacters(info.prev)
    }

    useEffect(() => {
        fetchCharacters(initialUrl)
    }, [])



    const [characters, setCharacters] = useState([]);

    const [filteredCharacters, updateFiltered] = useState([]);
    const [segundoFiltro, updateSegundoFilter] = useState([])



    const handleChange = (c) => {
        const filteredCharc = characters.filter(d => d.name.toLowerCase().includes(c.target.value));
        updateFiltered(filteredCharc)
        updateSegundoFilter(filteredCharc)
    }

    const handleVivos = () => {
        const segFilterCharc = filteredCharacters.filter(d => d.status === 'Alive');
        updateSegundoFilter(segFilterCharc)
    }

    const handleMuertos = () => {
        const segFilterCharc = filteredCharacters.filter(d => d.status === 'Dead');
        updateSegundoFilter(segFilterCharc)
    }

    const handleTodos = () => {
        const segFilterCharc = filteredCharacters.filter(d => d.status != 0);
        updateSegundoFilter(segFilterCharc)
    }







    return (
        <div >


            <div>
                <header className="card-container-header">
                    <div className="divBtns">
                        <button onClick={handleVivos} className='btn'>Alive</button>
                        <button onClick={handleMuertos} className='btn'>Muertos</button>
                        <button onClick={handleTodos} className='btn'>Todos</button>

                    </div>
                    <div className="input-div">
                        <input type="text" placeholder="Busca un personaje..." onChange={handleChange} className='search' />
                    </div>
                    <div>
                        <button onClick={previous} className='btn'>Anterior</button>
                        <button onClick={next} className='btn'>Siguiente</button>
                    </div>
                </header>
                <div className="card-container">
                    {segundoFiltro.map((e, i) => <CharacterCard key={i} characters={e}></CharacterCard>)}
                </div>
                <div className='footer-btn'>
                    <button onClick={previous} className='btn'>Anterior</button>
                    <button onClick={next} className='btn'>Siguiente</button>

                </div>
            </div>

        </div>
    )
}

export default CharacterList