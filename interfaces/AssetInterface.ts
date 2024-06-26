import { BusinessQuestionInterface } from "./BusinessQuestionInterface";

export interface AssetInterface {
  affiliate?: string;
  business_question?: BusinessQuestionInterface;
  category?: string;
  country: string;
  date: string;
  description: string;
  favorite: boolean;
  id: string;
  name: string;
  short_description: string;
  value: number;
}
