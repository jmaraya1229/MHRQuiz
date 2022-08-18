import React from "react";

function Quiz() {
    const questions = [
        {
            questionText: 'What is this monster?',
            answerOptions: [
                { answerText: 'bleh', isCorrect: false}
            ]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    
    // return (
    //     <div>
    //         {showScore ? (
    //             <div>
    //                 <h1>You scored {score} out of {questions.length}</h1>
    //             </div>
    //         ) : (   
    //             <>
	// 				<div className='question-section'>
	// 					<div className='question-count'>
	// 						<span>Question {currentQuestion + 1}</span>/{questions.length}
	// 					</div>
	// 					<div className='question-text'>{questions[currentQuestion].questionText}</div>
	// 				</div>
	// 				<div className='answer-section'>
	// 					{questions[currentQuestion].answerOptions.map((answerOption) => (
	// 						<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	// 					))}
	// 				</div>
	// 			</>    
    //     </div>
    )
};

export function Quiz();