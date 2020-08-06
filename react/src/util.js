
const typeData = {
    cases: {
        hex: "#CC1034",
        rgb: "rgb(204, 16, 52)",
        rgba: (opacity) => "rgb(204,16,52," + opacity + ")",
        multiplier: 800
    },
    recovered: {
        hex: "#7dd71d",
        rgb: "rgb(125,215,29)",
        rgba: (opacity) => "rgb(125,215,29," + opacity + ")",
        multiplier: 1200
    },
    deaths: {
        hex: "#000000",
        rgba: (opacity) => "rgb(0,0,0," + opacity + ")",
        multiplier: 2000
    }
}

export {
    typeData
}