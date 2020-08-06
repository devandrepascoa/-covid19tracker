import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {

} from '@material-ui/core'
import numeral from "numeral"
import "./Chart.css"
import { typeData } from './util'

const options = {
    legend: {
        display: false
    },
    elements: {
        point: {
            radius: 0
        }
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: (tooltipItem, data) => {
                return numeral(tooltipItem.value).format("+0,0")
            }
        }
    },
    scales: {
        xAxes: [{
            type: "time",
            time: {
                format: "MM/DD/YY",
                tooltipFormat: "ll"
            }
        }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,

                },
                ticks: {
                    callback: (value, index, values) => {
                        return numeral(value).format("0a")
                    }
                }
            }
        ]
    }
}


function Chart({ country = "worldwide", type = "cases" }) {
    const [worldwideData, setWorldwideData] = useState(null)
    const [countriesData, setCountriesData] = useState([])
    const [selectedData, setSelectedData] = useState([])

    function buildDataFromTimeline(json) {
        var first_case_key = (Object.keys(json).length > 0) ? Object.keys(json)[0] : 0
        var previous_case = json[first_case_key]
        delete json[first_case_key]

        const data = Object.keys(json).map((e, index) => {
            var data = json[e] - previous_case
            if (data < 0) data = 0
            previous_case = json[e]
            return { x: e, y: data }
        })
        return data
    }

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then(response => response.json())
            .then(json => {
                setWorldwideData(json)
                var data = buildDataFromTimeline(json[type])
                setSelectedData(data)

            })
        fetch("https://disease.sh/v3/covid-19/historical?lastdays=120")
            .then(response => response.json())
            .then(json => {
                setCountriesData(json)
            })
    }, [])

    useEffect(() => {
        if (country === "worldwide") {
            if (worldwideData == null) {
                setSelectedData([])
                return
            }
            console.log(worldwideData[type])
            var data = buildDataFromTimeline(worldwideData[type])
            setSelectedData(data)
        } else {
            let country_data = countriesData.find((e) => e.country === country)
            if (country_data && 'timeline' in country_data) {
                var data = buildDataFromTimeline(country_data.timeline[type])
                setSelectedData(data)
            } else {
                setSelectedData()
            }
        }
    }, [country, type])

    return (
        <div className="chart">
            <Line options={options} data={{ datasets: [{ backgroundColor: typeData[type].rgba(0.5), borderColor: typeData[type].hex, data: selectedData }] }}></Line>
        </div>
    )
}

export default Chart