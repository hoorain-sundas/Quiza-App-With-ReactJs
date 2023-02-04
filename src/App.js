import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowOptions from './Components/showoptions.js'
import StatusBar from './Components/statusbar';
import Result from './Components/Result';
import Form from  './Components/form'

function App() {
  const [quizData, setQuizData] = useState({
    quizName: "React Quiz",
    totalMarks: 60,
    perQuestionmarks: 10,
    questions: [
      {
        question: "Html Stands For____________________________",
        options: [
          "Hyper Text Makeup Language",
          "html",
          "Case Cading Style Sheet",
          "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
      },
      {
        question: "Css Stands For _______________________",
        options: [
          "Casecading Style Sheet",
          "Java",
          "Ram",
          "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
      },
      {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
      },
      {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
      },
      {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
      },
      {
        question: "Rom Stands For _______________________",
        options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
      },
    ],
  })
  
  const {questions, perQuestionmarks, quizName, totalMarks} = quizData;
  const [indexNumber, setIndexNumber] = useState(0);
  let [score, setScore] = useState(0);
  let [attemptedQuestion, setAttemptedQuestion] = useState(0);
  let [correctQuestion, setCorrectQuestion] = useState(0);
  let [statusConfig, setStatusConfig]= useState([
    {
      label: "correctQuestions",
      value: correctQuestion,
      color: "#588157",
     
    },
    {
      label: "TotalQuestions",
      value: questions.length,
      color: "#023047",

    },
    {
      label: "attemptedQuestions",
      value: indexNumber,
      color: "#2a9d8f",

    },
    
  ])
 
  return (
    
  
      indexNumber < 6 ? <Box className="rounded shadow p-3 container mt-2">
      <Box className=" bg-dark App d-flex justify-content-between">
      <Typography variant="h2" className="text-warning mt-3 ">{quizName}</Typography>
      <Typography variant="h4" className='flex-end'>Questions{''}
      <Typography variant="span" className="text-light mt-3 fs-5 me-0 align-items-end">{indexNumber+1} / {questions.length}</Typography> 
      </Typography>
      
      <br></br>
      <Typography variant="p" className="text-light flex-end">Total Marks: {totalMarks}</Typography>
      </Box>
      <Box className="mt-5 Question-box bg-light rounded shadow second_box">
       <Typography variant="h5" className='text-center'>{questions[indexNumber].question}</Typography>
       {/* <Typography variant="span" className='flex-start '>{perQuestionmarks}</Typography> */}

       <Typography variant="h4" className='text-center'>Questions</Typography>

      </Box>
   <Box className="container">
      <ShowOptions className="p-2 m-2 w-100" optionClick={(e) => {
        console.log(e);
        { setIndexNumber(indexNumber+1);
          setAttemptedQuestion(attemptedQuestion += 1) ;
          statusConfig[2].value = attemptedQuestion;
          e == questions[indexNumber].correctAns ?  setScore(score+10, setCorrectQuestion(correctQuestion+=1), statusConfig[0].value += correctQuestion)
         
      
          : setScore(score, setCorrectQuestion(correctQuestion))
        }
        // setIndexNumber(indexNumber+1);
      }}
      data={questions[indexNumber].options} />
      
   </Box>
   <Box className=" container fs-4 mt-5">
   <Typography className='bg-dark text-light ps-2 pe-2 m-2' variant="p"> Score : {score} </Typography>
   <br></br>
   <Typography className='bg-dark text-light ps-2 pe-2 m-2' variant="p"> Correct Questions : {correctQuestion} </Typography>
   <br></br>
   <Typography className='bg-dark text-light ps-2 pe-2 m-2' variant="p"> Attempted Questions : {attemptedQuestion} </Typography>

   </Box>
    <Box className="container p-1 m-2"> 
        <StatusBar configdata={statusConfig} />
     </Box>
     
     <Box>
        <Form />
      </Box>

  </Box>
    
     :
     <Box className="showResult container">
      
      <Result userScore={score} correctQ={correctQuestion} attemptedQ={attemptedQuestion} totalMarks={totalMarks} totalQ={questions.length}/>
  
      
      </Box>

     
  )
}

export default App;
