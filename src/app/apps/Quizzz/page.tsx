import { Stack } from "@mui/material";
import QuizCard from "./components/quiz-card";

export default function Page() {
  return (
    <Stack  className="h-full" direction={'column'}>
      <QuizCard />
    </Stack>
  );
}
