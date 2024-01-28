import React from 'react';
import { useState } from 'react';
import { cats } from './assets/arrays/cats';
import { questions } from './assets/arrays/questions';
import wool from './assets/images/wool2.png';
import Question from './components/Question/question.js';
import CatSwiper from './components/CatSwiper/catSwiper.js';
import { filterCats } from './filterCats.js';


function App() {

  const [currentStep, setStep] = useState(1);
  const [userAnswers, setAnswers] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [showWarning, setShowWarning] = useState(true);
  const [nonMatchingCats, setNonMatchingCats] = useState([]);


  function handleNextStep(event) {

    const questionNumber = event.target.value;
    setAnswers(prevAnswers => [...prevAnswers, JSON.parse(questionNumber.toLowerCase())]);
    setStep(currentStep + 1);
  }


  function handlePreviousStep() {
    setAnswers(prevAnswers => {
      const deleteAnswer = [...prevAnswers];
      deleteAnswer.pop();
      return deleteAnswer;
    })
    setStep(currentStep - 1);
  }

  function filterAndStep() {
    filterCats(cats, userAnswers, setFilteredCats, setNonMatchingCats)
    setStep(currentStep + 1)
  }

  const toggleWarning = () => {
    setShowWarning(!showWarning);
  };


  return (
    <div className="App">

      {questions.map((question, index) => (

        currentStep === index + 1 && index <= questions.length + 1 && (

          <div className="quiz-container">
            <Question
              userQuestion={question.question}
              userAnswer1={question.leftBtn}
              userAnswer2={question.rightBtn}
              currentStep={currentStep}
              handleNextStep={handleNextStep}
            />
            {index > 0 &&
              <button className="wool" onClick={handlePreviousStep}><img src={wool} /></button>
            }

          </div>
        )
      ))}

      {currentStep === questions.length + 1 && (
        <div>
          <button onClick={filterAndStep} className='show-cats-btn'>Kliknij i poznaj kandydatów!</button>
          <button className="wool" onClick={handlePreviousStep}><img src={wool} /></button>
        </div>
      )}

      {currentStep === questions.length + 2 && (

          <CatSwiper
            firstArray={filteredCats.perfectMatches}
            secondArray={userAnswers}
            setAnswers={setAnswers}
            nonMatchingCats={nonMatchingCats}
            setNewCats={() => filterCats(cats, userAnswers, setFilteredCats, setNonMatchingCats)}
          />
      )}
    </div>
  );
}

export default App;