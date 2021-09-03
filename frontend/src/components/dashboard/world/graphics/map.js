const json = require('./country_cases.json')

function formatGeo(data) {
    return data.reduce((map, obj) => {
        map[obj.city] = [obj.longt, obj.lat]
        return map
    }, {})
}

function formatCases(data) {
    let arr = []
    data.forEach((item) => {
        arr.push({
            name: item.city,
            value: [item.longt, item.lat,item.confirmed]
        })
    })
    return arr
}

function setRadius(data) {
    if (data>1000000) {
        return 10
    } else if (data>500000 && data<=1000000) {
        return 9
    } else if (data<=500000 && data>250000) {
        return 8
    } else if (data<=250000 & data > 100000) {
        return 7
    } else if (data>50000 & data <= 100000) {
        return 6
    } else if (data>25000 & data <= 50000) {
        return 5
    } else if (data>10000 & data <= 25000) {
        return 4
    } else if (data>5000 & data <= 10000) {
        return 3
    } else if (data>2500 & data <= 5000) {
        return 2
    } else {
        return 2
    }
}


const data = formatCases(json)

// function convertData(data) {
//     const res = [];
//     for (let i = 0; i < data.length; i++) {
//         const geoCoord = geoCoordMap[data[i].name];
//         if (geoCoord) {
//             res.push({
//                 name: data[i].name,
//                 value: geoCoord.concat(data[i].value)
//             });
//         }
//     }
//     return res;
// }

export default {
    textStyle: {
        fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
    },
    backgroundColor: "#404a59",
    title: {
        text: "COVID-19 in the worldwide",
        subtext: "data from JHU CSSE",
        sublink: "https://github.com/CSSEGISandData/COVID-19",
        left: "center",
        textStyle: {
            color: "#fff"
        }
    },
    tooltip: {
        trigger: "item"
    },
    legend: {
        orient: "vertical",
        y: "bottom",
        x: "right",
        inactiveColor: "#ccc", // 图例关闭时的颜色
        data: [],
        selected: {
            "Cases": true,
            "Vaccinations": false
        },
        textStyle: {
            color: "#fff"
        }
    },

    // 地理坐标系组件用于地图的绘制

    geo: {
        map: "world",
        show: true, // 地理坐标系组件
        roam: true, //是否开启鼠标缩放和平移漫游
        zoom: 3,
        center: [115.97, 29.71],
        scaleLimit: {
            min: 1,
            max: 8,
        },
        label: {
            // show: true,
            color: '#fff'
        },
        emphasis: {
            label: {
                show: true,
                color: '#eee'
            },
            itemStyle: {
                areaColor: "#2a333d"
            }
        },
        itemStyle: {
            areaColor: "#323c48",
            borderColor: "#111"
        },
        tooltip: {
            // show: false, // 是否现实提示框组件
        },
    },

    // baidu Map

    // bmap: {
    //     center: [104.114129, 37.550339],
    //     zoom: 1,
    //     roam: true,
    //     mapStyle: {
    //         styleJson: [
    //             {
    //                 'featureType': 'water',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'color': '#404a59'
    //                 }
    //             }, {
    //                 'featureType': 'land',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'color': '#323c48'
    //                 }
    //             }, {
    //                 'featureType': 'railway',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'visibility': 'off'
    //                 }
    //             }, {
    //                 'featureType': 'highway',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'color': '#fdfdfd'
    //                 }
    //             }, {
    //                 'featureType': 'highway',
    //                 'elementType': 'labels',
    //                 'stylers': {
    //                     'visibility': 'off'
    //                 }
    //             }, {
    //                 'featureType': 'arterial',
    //                 'elementType': 'geometry',
    //                 'stylers': {
    //                     'color': '#fefefe'
    //                 }
    //             }, {
    //                 'featureType': 'arterial',
    //                 'elementType': 'geometry.fill',
    //                 'stylers': {
    //                     'color': '#fefefe'
    //                 }
    //             }, {
    //                 'featureType': 'poi',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'visibility': 'off'
    //                 }
    //             }, {
    //                 'featureType': 'green',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'visibility': 'off'
    //                 }
    //             }, {
    //                 'featureType': 'subway',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'visibility': 'off'
    //                 }
    //             }, {
    //                 'featureType': 'manmade',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'color': '#d1d1d1'
    //                 }
    //             }, {
    //                 'featureType': 'local',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'color': '#d1d1d1'
    //                 }
    //             }, {
    //                 'featureType': 'arterial',
    //                 'elementType': 'labels',
    //                 'stylers': {
    //                     'visibility': 'off'
    //                 }
    //             }, {
    //                 'featureType': 'boundary',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'color': '#1a1c1f'
    //                 }
    //             }, {
    //                 'featureType': 'building',
    //                 'elementType': 'all',
    //                 'stylers': {
    //                     'color': '#d1d1d1'
    //                 }
    //             }, {
    //                 'featureType': 'label',
    //                 'elementType': 'labels.text.fill',
    //                 'stylers': {
    //                     'visibility': 'off'
    //                 }
    //             }],
    //     }
    // },

    series: [
        {
            name: "Cases",
            type: "scatter",
            coordinateSystem: "geo",
            data: data,
            // symbolSize: val => val[2] / 200000,
            symbolSize: val => setRadius(val[2]),
            // symbolSize: 2,
            tooltip: {
                formatter: function (val) {
                    return val.name + ": " + val.value[2];
                }
            },
            itemStyle: {
                color: "#ddb926"
            },
            geoIndex: 0,
            progressive: 0
        },
        // {
        //     name: "Vaccinations",
        //     type: "scatter",
        //     coordinateSystem: "geo",
        //     data: data,
        //     symbolSize: val => val[2] / 10,
        //     tooltip: {
        //         formatter: function (val) {
        //             return val.name + ": " + val.value[2];
        //         }
        //     },
        //     itemStyle: {
        //         color: "#bbf"
        //     }
        // },

        {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            // data: data.sort((a, b) => b.value - a.value).slice(0, 6),
            data: [
                {
                    name: 'United States',
                    value: [-88.20689944, 31.4092794, 34411128]
                },
                {
                    name: 'India',
                    value: [77.10898, 28.646519, 31484605]
                },
                {
                    name: "Brazil",
                    value:[ -47.95,-15.75, 19749073]
                },
                {
                    name: "Russia",
                    value:[37.35,55.45, 6094379]
                },
                {
                    name: "France",
                    value:[2.20,48.50, 6088930]
                }
            ],
            symbolSize: 10,
            showEffectOn: "render",
            rippleEffect: {
                brushType: "stroke"
            },
            emphasis: {
                scale: true
            },
            tooltip: {
                formatter: function (val) {
                    return val.name + ": " + val.value[2];
                }
            },
            label: {
                formatter: "{b}",
                position: "right",
                show: true
            },
            itemStyle: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333"
            },
            zlevel: 1
        }
    ]
};
