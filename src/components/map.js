export default {
  tooltip: {
    trigger: 'item',
    formatter: params => {
      let name = params.name
      let value = params.data.value
      return `<div style="padding: 0 40px;width:362px;height:150px;background: url(${require('../assets/NoticeBg.png')}) no-repeat;background-size: 100%;">
          <div style="font-size: 20px;line-height:20px;color: #FFFFFF;padding-top:41px;">手机尾号<span style="color: #FFDF00">${
            value[2]
          }</span>的<span style="color: #FFDF00">${name}</span>用户正在询价
        </div>
        <div style="font-size: 24px;color: #FFDF00;width: 362px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;margin-top: 22px;">「${
          value[3]
        }」</div>
      </div>`
    },
    backgroundColor: 'none',
    position: 'top'
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: true
      }
    },
    itemStyle: {
      normal: {
        areaColor: 'rgba(0,255,232,.6)',
        borderColor: 'rgba(255,255,255,.6)',
        label: {
          show: true
        }
      },
      emphasis: {
        areaColor: '#00FFe8',
        label: {
          show: true
        }
      }
    }
  },
  series: [
    {
      name: '正在询价',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: 1,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false,
          textStyle: {
            fontSize: 32,
            fontWeight: '900',
            align: 'left',
            shadowBlur: 100
          }
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#FFDF00',
          label: {
            show: true
          },
          areaColor: '#dec313'
        }
      }
    },
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: [],
      symbolSize: val => val[20] / 100,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: false,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        }
      },
      itemStyle: {
        normal: {
          color: '#FFDF00',
          shadowBlur: 100,
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
