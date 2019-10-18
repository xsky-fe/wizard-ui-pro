import Mock from 'mockjs';
let base = +new Date(2018, 10, 1);
const oneDay = 24 * 3600 * 1000;
const date = [];

const data = [Math.random() * 100];

function format(i: string | number) {
  return Number(i) < 10 ? '0' + i : i;
}
for (let i = 1; i < 1000; i++) {
  const newDate = new Date(base += oneDay);
  const newY = newDate.getFullYear();
  const newM = format(newDate.getMonth() + 1);
  const newD = format(newDate.getDate());
  date.push([newY, newM, newD].join('-'));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

Mock.Random.title();
Mock.Random.date();
Mock.Random.name();

export default Mock.mock({
  tooltip: {
    trigger: 'axis',
    position: function (pt: any) {
      return [pt[0], '10%'];
    }
  },
  title: {
    show: false,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%']
  },
  dataZoom: [{
    type: 'inside',
    start: 0,
    end: 10
  }, {
    start: 0,
    end: 10,
    handleSize: '80%',
    handleStyle: {
      color: '#fff',
      shadowBlur: 3,
      shadowColor: 'rgb(107, 88, 196)',
      shadowOffsetX: 2,
      shadowOffsetY: 2
    }
  }],
  series: [
    {
      name: '@name',
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: 'rgb(107, 88, 196)'
      },
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1, //从左到右
            y2: 0,
            colorStops: [{
              offset: 0,
              color: 'rgb(107, 88, 196)' // 0% 处的颜色
            }, {
              offset: 1,
                color: 'rgba(107, 88, 196, .6)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      data: data
    }
  ]
});