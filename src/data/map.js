let data = [
  {name: '海门', value: 90,selected:true},

]
const geoCoordMap = {
  '海门': [121.15, 31.89]
}

function convertData (data) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

export default {
  // backgroundColor: 'red',
  // title: {
  //   text: '全国主要城市空气质量',
  //   subtext: 'data from PM25.in',
  //   sublink: 'http://www.pm25.in',
  //   left: 'center',
  //   textStyle: {
  //     color: '#fff'
  //   }
  // },
  tooltip: {
    trigger: 'item'
  },
  // legend: {
  //   orient: 'vertical',
  //   y: 'bottom',
  //   x: 'right',
  //   data: ['pm2.5'],
  //   textStyle: {
  //     color: '#fff'
  //   }
  // },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: 'rgba(0,255,232,.6)',
        borderColor: 'rgba(255,255,255,.6)',
        borderWidth: 1,
        label:{show:true}
      },
      emphasis: {
        areaColor: '#00FFE8',
        label:{show:true}
      }
    }
  },
  series: [
    {
      name: '正在询价',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: val => val[2] / 10,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#fff',
          label:{
            show:true
          },
          areaColor: '#dec313',
        }
      }
    },
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(data.sort((a, b) => b.value - a.value).slice(0, 6)),
      symbolSize: val => val[2] / 10,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: false,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#FFDF00',
          shadowBlur: 10,
          shadowColor: '#f60'
        },
        emphasis: {
           label: {
              show: true
            },
            areaColor: 'red'
        }
      },
      zlevel: 1
    }
  ]
}
