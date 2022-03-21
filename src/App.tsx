import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { TrainingCourses } from "./components/TrainingCourses";
import { Flex, FlexColumn } from "./defaultStyles";

function App() {
  return (
    <FlexColumn>
      <Header />
      <Flex>
        <Navigation />
        <TrainingCourses />
      </Flex>
    </FlexColumn>
  );
}

export default App;
