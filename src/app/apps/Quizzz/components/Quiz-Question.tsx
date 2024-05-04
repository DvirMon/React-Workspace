import classes from "./Quiz-Question.module.css";

export default function QuizQuestion({ text }: { text: string }) {
  return (
    <div className={classes.question}>
      <h2>{text}</h2>;
    </div>
  );
}
