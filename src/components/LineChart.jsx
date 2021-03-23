import React from "react";
import { Line } from "react-chartjs-2";
export default function LineChart() {
  return (
    <div>
      {" "}
      <Line
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Active Trips",
              data: [0, 40, 60, 40, 55, 40, 35, 55, 43, 25, 23, 8, 20],
              backgroundColor: ["rgb(255,255, 255)"],
              borderColor: ["rgb(0, 255, 0)"],
              borderWidth: 3,
            },
            {
              label: "Completed Trips",
              data: [12, 19, 33, 35, 42, 43, 48, 75, 65, 65, 40, 30, 20],
              backgroundColor: ["rgb(255,255, 255)"],
              borderColor: ["rgb(17, 62, 130)"],
              borderWidth: 3,
            },
            {
              label: "Cancelled Trips",
              data: [12, 19, 33, 35, 42, 43, 48, 75, 65, 65, 40, 30, 20],
              borderColor: ["rgb(243, 64, 43)"],
              backgroundColor: ["rgb(255,255, 255)"],
              borderWidth: 3,
            },
          ],
        }}
        width={100}
        height={300}
        options={{ maintainAspectRatio: false }}
      />{" "}
    </div>
  );
}
