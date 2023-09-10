"use client"

import { useState, useEffect } from "react"



const PlanetSelector = ({mode, planetColor, distance, setDistance}) => {

    
    const [planetSelected, setPlanetSelected] = useState("...");
    const [planetData, setPlanetData] = useState("null");

    const handlePlanet = (planet) => {
        setPlanetSelected(planet)
    };


    useEffect(() => {
        if (planetSelected !== "Origen") {
            fetch('https://api.api-ninjas.com/v1/planets?name=' + planetSelected, {
                headers: {
                    'X-Api-Key': 'V2e/L0WF27K/HjK8n/wtIw==1DfQCAx0r0c1swYS'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setPlanetData(data);
                    if (data[0]) {
                        setDistance(data[0].distance_light_year);
                    }
                });
        }
    }, [planetSelected]);

    const planetExtraData = {
        Mercury: { gravity: 3.7, type: "Rocoso" },
        Venus: { gravity: 8.87, type: "Rocoso" },
        Earth: { gravity: 9.807, type: "Rocoso" },
        Mars: { gravity: 3.711, type: "Rocoso" },
        Jupiter: { gravity: 24.79, type: "Gaseoso" },
        Saturn: { gravity: 10.44, type: "Gaseoso" },
        Uranus: { gravity: 8.69, type: "Gaseoso" },
        Neptune: { gravity: 11.15, type: "Gaseoso" },
        Pluto: { gravity: 0.62, type: "Rocoso" }
    };


      
    return (
        <div className="pb-6">
            <h4 className="text-color3 text-base">Orbita {mode}</h4>
            <h1 className=" text-5xl pt-1 lg:text-9xl" style={{fontFamily: "myFont", color: mode == "actual" ? "#E4E3DB" : "#B6FF00"}}>{planetSelected}</h1>
            <div id="planetsSelector" className="w-full overflow-x-scroll flex gap-4 mt-4 lg:pb-4 text-color5">
                <button className="planetButton" onClick={() => handlePlanet("Mercury")}>Mercurio</button>
                <button className="planetButton" onClick={() => handlePlanet("Venus")}>Venus</button>
                <button className="planetButton" onClick={() => handlePlanet("Earth")}>Tierra</button>
                <button className="planetButton" onClick={() => handlePlanet("Mars")}>Marte</button>
                <button className="planetButton" onClick={() => handlePlanet("Jupiter")}>Jupiter</button>
                <button className="planetButton" onClick={() => handlePlanet("Saturn")}>Saturno</button>
                <button className="planetButton" onClick={() => handlePlanet("Uranus")}>Urano</button>
                <button className="planetButton" onClick={() => handlePlanet("Neptune")}>Neptuno</button>
                <button className="planetButton" onClick={() => handlePlanet("Pluto")}>Pluton</button>
            </div>
            <div id="planetDataDisplay" className="w-full h-28 lg:h-40 bg-surface-variant mt-4 px-3 py-3">
                <div id="dataTitleContainer" className="h-[10%]">
                    <h1 id="dataTitle" className="text-on-surface-variant text-xs lg:text-base">Detalles del planeta {mode}</h1>
                </div>
                <div className="h-[90%] flex flex-col content-center justify-center lg:pt-4">
                    <h4 className="dataDetail"> Masa: {planetData[0] && planetData[0].mass != null ? planetData[0].mass.toExponential(1) : 0} Jup</h4>
                    <h4 className="dataDetail">Gravedad: {planetExtraData[planetSelected] && planetExtraData[planetSelected].gravity} m/s^2</h4>
                    <h4 className="dataDetail">Temperatura: {planetData[0] && planetData[0].temperature != null ? planetData[0].temperature : 0} °K</h4>
                </div>
            </div>

        </div>
    )
}

export default PlanetSelector
