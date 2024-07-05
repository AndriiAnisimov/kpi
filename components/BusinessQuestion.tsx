import { BusinessQuestionInterface } from "@/interfaces/BusinessQuestionInterface";

export default function BusinessQuestion({
  itemClass,
  businessQuestion
}: {
  itemClass: string,
  businessQuestion: BusinessQuestionInterface
}) {
  return (
    <li key={businessQuestion.idBq} className={itemClass}>      
      <section>
        <p className="font-bold">{businessQuestion.name}</p>
        <p>{businessQuestion.description}</p>
      </section>
    </li>
  );
}
