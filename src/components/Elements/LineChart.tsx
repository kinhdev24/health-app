import { colors } from "@/themes"
import { ApexOptions } from "apexcharts"
import ReactApexChart from "react-apexcharts"

type ChartProps = {
  height?: number
}

const series: ApexAxisChartSeries = [
  {
    name: "Product 1",
    data: [200, 195, 170, 180, 176, 160, 175, 160, 155, 150, 145, 140],
    color: colors["primary-yellow"],
  },
  {
    name: "Product 2",
    data: [200, 192, 160, 185, 160, 155, 150, 145, 140, 135, 130, 120],
    color: colors["light-blue"],
  },
]

const options: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    background: colors["primary-black"],
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },

  title: {
    align: "left",
  },
  grid: {
    borderColor: "#aaa",
  },
  xaxis: {
    categories: [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
    ],
    axisBorder: {
      show: true, // Set show to true to show the X-axis line
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: false, // Set show to false to hide the values on the Y-axis
  },
  theme: {
    mode: "dark",
  },
  legend: {
    show: false, // Set show to false to hide the legend
  },
}

export const LineChart = ({ height = 340 }: ChartProps) => {
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={height}
    />
  )
}
