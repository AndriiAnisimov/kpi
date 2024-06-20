import { useSelector } from "react-redux";
import { RootState } from "../store";

import BusinessQuestion from "./BusinessQuestion";
import Title from "./Title";

export default function BusinessQuestionList() {
  const assets = useSelector((state: RootState) => state.assets.assets);
  const filteredAssets = assets.filter(asset => asset.business_question !== undefined);
  const businessQuestions = filteredAssets.map(bq => bq.business_question)

  return (
    <>
      <Title title="Business Questions" />

      <ul className="grid gap-x-8 gap-y-4 grid-cols-2 mt-4">
        {businessQuestions.map((businessQuestionItem) => {
          if (businessQuestionItem) {
            return <BusinessQuestion
              key={businessQuestionItem.id_bq}
              businessQuestion={businessQuestionItem}
              itemClass="flex gap-2 p-2 rounded hover:bg-slate-200 hover:cursor-pointer"
            />
          }
          return null;
        })}
      </ul>
    </>
  );
}
