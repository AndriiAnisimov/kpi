import { BusinessQuestionInterface } from "./BusinessQuestionInterface";

export interface AssetInterface {
  business_question?: BusinessQuestionInterface;
  category?: string;
  date: string;
  description: string;
  favorite: boolean;
  id: string;
  name: string;
  short_description: string;
  value: number;
}
