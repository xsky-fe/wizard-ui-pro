import React from 'react';
import echarts from 'echarts';

type Props = {
  width?: string,
  height?: string,
  option: object,
}

export default (props: Props) => {
  const { width = '100%', height = '100%', option } = props;
  const container: any = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const chart = echarts.init(container.current);
    chart.setOption(option);
  })
  return <div ref={container} style={{ width, height }}/>
}