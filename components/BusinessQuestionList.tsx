import { useFavoriteAssets } from "@/utils/useFavoriteAssets";
import BusinessQuestion from "./BusinessQuestion";
import Title from "./Title";

export default function BusinessQuestionList() {
  const favoriteAssets = useFavoriteAssets();
  const filteredAssets = favoriteAssets.filter(asset => asset.business_question !== undefined);
  const businessQuestions = filteredAssets.map(bq => bq.business_question);
  const hasValidQuestions = businessQuestions.some(bq => bq);

  return (
    <>
      {hasValidQuestions && <Title title="Business Questions" />}

      {hasValidQuestions ? (
        <ul className="grid gap-x-8 gap-y-4 grid-cols-2 mt-4">
          {businessQuestions.map((businessQuestionItem) => (
            businessQuestionItem ? (
              <BusinessQuestion
                key={businessQuestionItem.id_bq}
                businessQuestion={businessQuestionItem}
                itemClass="flex gap-2 p-2 rounded hover:bg-slate-200 hover:cursor-pointer"
              />
            ) : null
          ))}
        </ul>
      ) : (
        <p className="text-center mt-4">No business questions selected</p>
      )}
    </>
  );
}
