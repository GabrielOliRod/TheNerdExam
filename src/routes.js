import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import QuestionProgramming from "./pages/QuestionProgramming";
import QuestionHardware from "./pages/QuestionHardware";
import QuestionGames from "./pages/QuestionGames";
import Result from "./pages/Results";
import AllQuestions from "./pages/allQuestions";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<IndexPage />} />
                <Route path={'/QuestionProg'} element={<QuestionProgramming />} />
                <Route path={'/QuestionHard'} element={<QuestionHardware />} />
                <Route path={'/QuestionGames'} element={<QuestionGames />} />
                <Route path={'/Result'} element={<Result />} />
                <Route path={'/AllQuestions'} element={<AllQuestions />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes