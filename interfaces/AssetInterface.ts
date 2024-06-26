import { BusinessQuestionInterface } from "@/interfaces/BusinessQuestionInterface";
import { ChartDataInterface } from "@/interfaces/ChartDataInterface";

export interface AssetInterface {
  affiliate?: string;
  archive: boolean;
  brand: string;
  business_question?: BusinessQuestionInterface;
  category?: string;
  chart_data?: ChartDataInterface[];
  country: string;
  date: string;
  description: string;
  favorite: boolean;
  id: string;
  name: string;
  region: string;
  short_description: string;
  value: number;
}
