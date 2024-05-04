import QuizQuestion from "./Quiz-Question";
import classes from "./quiz-card.module.css";

// const AnswerContainer = styled(MuiBox)<{ theme?: Theme }>(({ theme }) => ({
//     height: "100%",
//     width: "100%",
//     overflow: "auto",
//     paddingLeft: theme.spacing(7),
//     paddingRight: theme.spacing(7),
//   }));

export default function QuizCard() {
  return (
    <div className={classes.quiz}>
      <QuizQuestion text="text" />
    </div>
  );
}
