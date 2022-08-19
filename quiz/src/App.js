import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What monster is this?',
      image: 'src/images/aknosom.png',
			answerOptions: [
				{ answerText: 'Azuros', isCorrect: false },
				{ answerText: 'Anjanath', isCorrect: false },
				{ answerText: 'Aknosom', isCorrect: true },
				{ answerText: 'Astalos', isCorrect: false },
			],
		},
		{
			questionText: 'What monster is this?',
      image: 'src/images/barioth.png',
			answerOptions: [
				{ answerText: 'Astablos', isCorrect: false },
				{ answerText: 'Barioth', isCorrect: true },
				{ answerText: 'Barroth', isCorrect: false },
				{ answerText: 'Volvidon', isCorrect: false },
			],
		},
		{
			questionText: 'What monster is this',
      image: 'src/images/diablos.png',
			answerOptions: [
				{ answerText: 'Diablos', isCorrect: true },
				{ answerText: 'Apex Diablos', isCorrect: false },
				{ answerText: 'Espinas', isCorrect: false },
				{ answerText: 'Garangolem', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
            <img className='image'></img>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}