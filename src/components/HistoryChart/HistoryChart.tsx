import Chart from 'react-apexcharts';
import * as S from './HistoryChart.styles';

const HistoryChart = () => {
  const options = {
    series: [
      {
        name: "cambio",
        data: [
          {
            x: new Date("2018-02-12").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-13").getTime(),
            y: 5.3,
          },
          {
            x: new Date("2018-02-14").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-15").getTime(),
            y: 5.11,
          },
          {
            x: new Date("2018-02-16").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-17").getTime(),
            y: 5.25,
          },
          {
            x: new Date("2018-02-18").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-19").getTime(),
            y: 5.2,
          },
        ],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    yaxis: {
      min: 5,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#0F172A",
        },
        formatter: (value:number) => {
          return value.toFixed(1).replace('.', ',')
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    colors: ["#7C3AED"],
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<div class="tooltip">
      <span>${String(series[seriesIndex][dataPointIndex]).replace('.', ',')}</span>
      <span>${new Date(
        w.globals.seriesX[seriesIndex][dataPointIndex]
      ).toLocaleDateString("pt-BR", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })}</span>
      </div>`
      },
    },
  }

  return (
    <S.Container>
      <Chart options={options} series={options.series} type={options.chart.type} height={options.chart.height} />
      <S.ChartControls>
        <S.Control>3D</S.Control>
        <S.Control>7D</S.Control>
        <S.Control className='active'>1M</S.Control>
        <S.Control>5A</S.Control>
        <S.Control>Max</S.Control>
      </S.ChartControls>
    </S.Container>
  );
}

export default HistoryChart;
