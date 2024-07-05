import { BusinessQuestionInterface } from "@/interfaces/BusinessQuestionInterface";
import { ChartDataInterface } from "@/interfaces/ChartDataInterface";

export interface AssetInterface {
  affiliate?: string;
  archive: boolean;
  brand: string;
  businessQuestion?: BusinessQuestionInterface;
  category?: string;
  chartData?: ChartDataInterface[];
  country: string;
  date: string;
  description: string;
  favorite: boolean;
  id: string;
  name: string;
  region: string;
  shortDescription: string;
  value: number;
}
