export default {
  tooltip: {
    trigger: 'item',
    formatter: params => {
      let name = params.name
      let percent = params.percent
      let index = params.dataIndex
      let color = ['#00FFE8', '#FFDF00', '#FF4989', '#ff6600']
      return `<span>${name}</span></br><span style="color: ${
        color[index]
      };font-size: 30px">${percent}%</span>`
    },
    position: function(pos, params, dom, rect, size) {
      var obj = {}
      obj[['right', 'left'][+(pos[0] < size.viewSize[0] / 2)]] =180
      obj[['bottom', 'top'][+(pos[1] < size.viewSize[1] / 2)]] =10
      console.log(obj,'obj')
      return obj
    },
    backgroundColor: 'none',
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      align: 'left'
    }
  },
  calculable: true,
  color: ['#00FFE8', '#FFDF00', '#FF4989', '#ff6600'],
  series: [
    {
      type: 'pie',
      radius: [20, 110],
      center: ['40%', '50%'],
      roseType: 'radius',
      label: {
        normal: {
          show: false,
          textStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic'
          }
        },
        emphasis: {
          show: true
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      data: [
        { value: 34, name: '重卡' },
        { value: 11, name: '中卡' },
        { value: 43, name: '轻卡' },
        { value: 12, name: '其他' }
      ]
    }
  ]
}
