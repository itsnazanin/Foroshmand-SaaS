"use client";

import ReactECharts from "echarts-for-react";
import { salesData } from "./data";
import useIsMobile from "./useIsMobile";



export default function SalesChartGraph() {

  const isMobile = useIsMobile()


  const option = {

    textStyle: {
        fontFamily: "var(--font-peyda)"
    },

    tooltip: {
      trigger: "axis",
      textStyle: {
        fontFamily: "var(--font-peyda)"
      }
    },


    grid: {
      left: isMobile ? "0%" : "3%",
      right: isMobile ? "0%" : "3%",
      bottom: "5%",
      top: "10%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: salesData.map(item => item.month),

      axisLine: {
        show: false,
      },

      axisTick: {
        show: false,
      },

      axisLabel: {
        color: "#A1A1AA",
        fontFamily: "var(--font-peyda)",
        fontSize: 12,
        margin: 20
      },
    },


    yAxis: {

      type: "value",

      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#3F3F46",
        },
      },

      axisLabel: {
        color: "#A1A1AA",
        fontFamily: "Peyda",
        fontSize: 12,
        margin: 15
      },

    },


    series: [
      {
        name: "فروش",
        type: "line",
        smooth: true,

        data: salesData.map(item => item.value),

        symbol: "none",

        lineStyle: {
          width: 3,
          color: "#8B5CF6",
        },


        areaStyle: {

          color: {
            type: "linear",

            x: 0,
            y: 0,
            x2: 0,
            y2: 1,

            colorStops: [
              {
                offset: 0,
                color: "rgba(139,92,246,0.35)",
              },

              {
                offset: 1,
                color: "rgba(139,92,246,0)",
              },
            ],
          },

        },
      },
    ],
  };


  return (
    <ReactECharts
      option={option}
      style={{
        height: "320px",
        width: "100%",
      }}
    />
  );
}