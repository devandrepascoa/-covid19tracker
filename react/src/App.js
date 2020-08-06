import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent
} from "@material-ui/core";
import InfoBox from './InfoBox'
import Map from './Map'
import Table from './Table'
import Chart from './Chart'
import './App.css';

function App() {
  const [countryCode, setCountryCode] = useState("worldwide")
  const [type, setType] = useState("cases")
  const [worldwideData, setWorldwideData] = useState(null)
  const [countryData, setCountryData] = useState([])
  const [selectedData, setSelectedData] = useState({ cases: 0, todayCases: 0, deaths: 0, todayDeaths: 0, recovered: 0, todayRecovered: 0 })
  const [center, setCenter] = useState([0, 0])
  const [zoom, setZoom] = useState(2)

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(data => data.json())
      .then((json) => {
        setSelectedData(json)
        setWorldwideData(json)
      })
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(data => data.json())
      .then((json) => {
        setCountryData(json)
        console.log(json)
      })
  }, [])

  const onCountryChange = (e) => {
    const countryCode = e.target.value
    setCountryCode(countryCode)
    if (countryCode === 'worldwide' && worldwideData != null) {
      setSelectedData(worldwideData)
      setZoom(2)
      setCenter(0, 0)
    }
    else {
      let countryInfo = countryData.find((e) => e.countryInfo.iso2 === countryCode)
      setZoom(5)

      setCenter([countryInfo.countryInfo.lat, countryInfo.countryInfo.long])
      setSelectedData(countryInfo)
    }
  }


  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <div className="app__selector">
            <img src={(countryCode === "worldwide") ? "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg" : countryData.find((e) => e.countryInfo.iso2 === countryCode).countryInfo.flag} alt="Flag"></img>
            <FormControl variant="outlined">
              <Select value={countryCode} onChange={onCountryChange}>
                <MenuItem key={0} value="worldwide">Worldwide</MenuItem>
                {countryData.map((country, index) => <MenuItem key={index + 1} value={country.countryInfo.iso2}>{country.country}</MenuItem>)}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="app__infoboxes">
          <InfoBox title="Cases" today={selectedData.todayCases} total={selectedData.cases} selected={type === 'cases'} color="red" onClick={(data) => { setType("cases") }}></InfoBox>
          <InfoBox title="Recoveries" today={selectedData.todayRecovered} total={selectedData.recovered} selected={type === 'recovered'} color="green" onClick={(data) => { setType("recovered") }}></InfoBox>
          <InfoBox title="Deaths" today={selectedData.todayDeaths} total={selectedData.deaths} selected={type === 'deaths'} color="black" onClick={(data) => { setType("deaths") }}></InfoBox>
        </div>

        <Map className="app__map" type={type} selectedCountry={countryCode} countries={countryData} zoom={zoom} center={center}></Map>
      </div>
      <div className="app__right">
        <Card className="app__right__card">
          <CardContent className="app__right__card">
            <div className="app__information">
              <h3>Data By Country</h3>
              <Table countries={countryData} />
              <h3>{(countryCode === "worldwide") ? "Worldwide" : countryData.find((e) => e.countryInfo.iso2 === countryCode).country} new cases</h3 >
              <Chart type={type} country={(countryCode === "worldwide") ? "worldwide" : countryData.find((e) => e.countryInfo.iso2 === countryCode).country}></Chart>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
