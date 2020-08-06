import React from 'react'
import {
    Card,
    Typography,
    CardContent
} from '@material-ui/core'
import './InfoBox.css'
import numeral from 'numeral'

function InfoBox({ title, today, total, onClick = () => { }, selected = true, color = "red" }) {
    console.log(color)

    return (
        <Card className={"infoBox " + ((selected) ? "selected " : "") + color} onClick={onClick}>
            <CardContent>
                <h1 className="infoBox__title" color="textSecondary"> {title}</h1>
                <h2 className={"infoBox__today "+color}>+{numeral(today).format("0.0a")} Today</h2>
                <h2 className="infoBox__total" color="textSecondary"> {numeral(total).format("0.0a")} Total</h2>
            </CardContent>
        </Card>
    )

}

export default InfoBox