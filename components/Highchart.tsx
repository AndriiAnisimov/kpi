import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { assetDB } from "../data";

export default function Highchart() {
  const data = assetDB.map(item => [new Date(item.date).getTime(), item.value]);

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
    <div className="mt-4 w-[800px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
