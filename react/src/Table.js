
import React from 'react'
import {

} from '@material-ui/core'
import './Table.css'
import numeral from 'numeral'

function Table({ countries =[]}) {

    return (
        <div className="table">
            <table>
                <tbody>
                    {countries.map((country) =>
                        <tr key={country.country}>
                            <td>
                                <img src={country.countryInfo.flag} alt="Flag"></img>
                            </td>
                            <td>{country.country}</td>
                            <td className="right-td">
                                <p>Cases:<strong>{numeral(country.cases).format("0.0a")}</strong></p>
                                <p>Recovered:<strong>{numeral(country.recovered).format("0.0a")}</strong></p>
                                <p>Deaths:<strong>{numeral(country.deaths).format("0.0a")}</strong></p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table