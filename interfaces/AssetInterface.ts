import { BusinessQuestionInterface } from "@/interfaces/BusinessQuestionInterface";

export interface AssetInterface {
  affiliate?: string;
  archive: boolean;
  brand: string;
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
