import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartDataInterface } from "@/interfaces/ChartDataInterface";

export default function Highchart({ chart_data }: { chart_data: ChartDataInterface[]}) {
  const data = chart_data.map(item => [new Date(item.date).getTime(), item.value]);

  const options = {
    accessibility: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Data",
        data: data
      }
    ],
    title: {
      text: null
    },
    xAxis: {
      type: "datetime"
    }
  };
  
  return (
    <div className="mt-4">
      {chart_data.length > 0 ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <p className="text-center mt-4">No data to display</p>
      )}
    </div>
  );
}
