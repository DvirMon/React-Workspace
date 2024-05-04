import classes from "./Quiz-Answer.module.css";

export default function QuizAnswerList({ answers }: { answers: string[] }) {
  return (
    <div className={classes.answers}>
      {answers.map((text, index) => (
        <div className={classes.answer} key={index}>
          <button>{text}</button>
        </div>
      ))}
    </div>
  );
}
