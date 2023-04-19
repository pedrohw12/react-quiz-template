import "./App.css";

// const questions = [
//   {
//     questionText: "Qual o idiomafalado no Brasil?",
//     answerOptions: [
//       { answerText: "Português", isCorrect: true },
//       { answerText: "Inglês", isCorrect: false },
//       { answerText: "Francês", isCorrect: false },
//       { answerText: "Alemão", isCorrect: false },
//     ],
//   },
//   {
//     questionText:
//       "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
//     answerOptions: [
//       { answerText: "Japão e Serra Leoa", isCorrect: true },
//       { answerText: "Austrália e Afeganistã", isCorrect: false },
//       { answerText: "Itália e Chade", isCorrect: false },
//       { answerText: "Brasil e Congo", isCorrect: false },
//     ],
//   },
//   {
//     questionText: "Qual empresa criou o Iphone?",
//     answerOptions: [
//       { answerText: "Apple", isCorrect: true },
//       { answerText: "Intel", isCorrect: false },
//       { answerText: "Amazon", isCorrect: false },
//       { answerText: "Microsoft", isCorrect: false },
//     ],
//   },
//   {
//     questionText: "Como aprender a programar?",
//     answerOptions: [
//       { answerText: "Praticando o que se aprende", isCorrect: true },
//       { answerText: "Vendo vídeo", isCorrect: false },
//       { answerText: "Lendo", isCorrect: false },
//       { answerText: "Dormindo", isCorrect: false },
//     ],
//   },
// ];

function App() {
  return (
    <div className="app">
      <div className="score-section">Você pontuou 4 de 5 perguntas</div>
      <>
        <div className="question-section">
          <div className="question-count">
            <span>Questão 1</span>/5
          </div>
          <div className="question-text">Qual o idioma falado no Brasil?</div>
        </div>

        <div className="answer-section">
          {/* Botão contendo a pergunta e ao clicar nela, seleciona como votada */}
        </div>
      </>
    </div>
  );
}

export default App;
