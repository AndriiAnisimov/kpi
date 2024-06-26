import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Highchart() {
  const assets = useSelector((state: RootState) => state.assets.assets);

  const favoriteAssets = useMemo(() => {
    return assets.filter(asset => asset.favorite);
  }, [assets]);

  const data = favoriteAssets.map(asset => [new Date(asset.date).getTime(), asset.value]);

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
    {favoriteAssets.length > 0 ? (
      <HighchartsReact highcharts={Highcharts} options={options} />
    ) : (
      <p className="text-center mt-4">No favorite assets to display</p>
    )}
    </div>
  );
}
