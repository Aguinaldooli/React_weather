import React, { useState } from "react";
import "./Search.css";

const apiKey = "0e5e33454b378138d85b73fa44404836";

function Search() {
    const [valor, setValor] = useState("");
    const [cidade, setCidade] = useState("");

    const pegaInput = (evento) => {
        setValor(evento.target.value); // Atualiza o estado com o valor do input
    };

    const pesquisar = () => {
        setCidade(valor); // Atualiza o estado com o valor inserido pelo usuário
        requestWeatherData();
    };

    const requestWeatherData = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Cidade não encontrada. Por favor, insira um nome de cidade válido.");
                }
                return res.json();
            })
            .then(json => {
                console.log(json);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="SearchContainer">
            <input
                type="text"
                placeholder="Digite o nome da cidade..."
                onChange={pegaInput}
                value={valor}
                className="SearchInput"
            />
            <button
                type="button"
                onClick={pesquisar}
                className="SearchButton"
            >
                Buscar
            </button>
        </div>
    );
}

export default Search;

