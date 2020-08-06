
import React from 'react'
import {

} from '@material-ui/core'
import './Table.css'
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
                                <p>Cases:<strong>{country.cases}</strong></p>
                                <p>Recovered:<strong>{country.recovered}</strong></p>
                                <p>Deaths:<strong>{country.deaths}</strong></p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table