
import React, { useEffect, useState } from 'react'
import {

} from '@material-ui/core'
import "./Map.css"
import numeral from 'numeral'
import { Map as LeafletMap, Marker, Circle, Popup, TileLayer } from 'react-leaflet'
import { typeData } from './util.js'
import "leaflet/dist/leaflet.css"


function Map({ center = [39.557191, -7.8536599], zoom = 5, type = 'cases', selectedCountry = "worldwide", countries = [], className = "" }) {
    const [isPopup, setIsPopup] = useState(false)
    const [country, setCountry] = useState({ countryInfo: { flag: "" }, cases: 0, recovered: 0, deaths: 0 })

    const onChangeSelectedCountry = () => {
        if (selectedCountry === 'worldwide') {
            setIsPopup(false)
            return
        }
        var country = countries.find((e) => e.countryInfo.iso2 === selectedCountry)
        setCountry(country)
        setIsPopup(true)
    }
    useEffect(onChangeSelectedCountry,
        [selectedCountry])

    return (
        <div className={"map " + className}>
            <LeafletMap center={center} minZoom={2} maxZoom={7} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {countries.map((country, index) => {
                    return (
                        <Circle
                            data-key={country.countryInfo.iso2}
                            key={index}
                            center={[country.countryInfo.lat, country.countryInfo.long]}
                            fillOpacity={0.5}
                            color={typeData[type].hex}
                            fillColor={typeData[type].hex}
                            radius={Math.sqrt(country[type]) * typeData[type].multiplier}
                            onclick={(e) => { setCountry(country); setIsPopup(true) }}
                        />

                    )
                })}
                {isPopup && <Popup position={[country.countryInfo.lat, country.countryInfo.long]} onClose={() => { setIsPopup(false) }} className="map__popup" >
                    <img src={country.countryInfo.flag} alt="Flag"></img>
                    <p className="country">{country.country}</p>
                    <p className="data">{numeral(country[type]).format("0,0") + " " + type} </p>
                </Popup>}
            </LeafletMap>
        </div >
    )
}

export default Map