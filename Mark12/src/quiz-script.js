const quizzes_list = [
  {
    id: "1",
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    answers: ["45°", "90°", "60°"],
    correct_answer: "90°",
  },
  {
    id: "2",
    question:
      "What is the type of triangle is where angle1 = 45° and angle2 = 45°?",
    answers: ["obtuse", "acute", "right angled"],
    correct_answer: "right angled",
  },
  {
    id: "3",
    question: "A triange can have",
    answers: ["one right angle", "two right angles"],
    correct_answer: "one right angle",
  },
  {
    id: "4",
    question: "Which of the following triangles are always similar?",
    answers: ["Equilateral Triangle", "Isosceles Triangle"],
    correct_answer: "Equilateral Triangle",
  },
  {
    id: "5",
    question: "Which of the following can form a right angled triangle",
    answers: ["14,15,26", "12,16,20"],
    correct_answer: "12,16,20",
  },
  {
    id: "6",
    question:
      "If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",
    answers: ["100°", "85°"],
    correct_answer: "100°",
  },
  {
    id: "7",
    question:
      "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
    answers: ["30°", "10°"],
    correct_answer: "30°",
  },
  {
    id: "8",
    question: "The perimeter of scalene triangle with sides a, b, c is",
    answers: ["a + b + c", "2a"],
    correct_answer: "a + b + c",
  },
  {
    id: "9",
    question: "A scalene triangle has ___ lines of symmetry",
    answers: ["two", "no", "15"],
    correct_answer: "no",
  },
  {
    id: "10",
    question:
      "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
    answers: ["85", "65", "45"],
    correct_answer: "45",
  },
];

function QuizApp(el, questionsList) {
  const button = document.createElement("button");
  const output = document.createElement("p");

  createHtmlElement(el, button, output, questionsList);
  addEventListener(button, output, questionsList);

  function createHtmlElement(el, button, output, questionsList) {
    createQuestions(el, questionsList);

    output.innerHTML = "";
    output.classList.add("output");
    el.appendChild(output);

    button.innerHTML = "Check your answers";
    el.appendChild(button);

    function createQuestions(el, questionsList) {
      const qDiv = document.createElement("div");
      qDiv.classList.add("quiz-container");
      questionsList.forEach((question) => {
        const elem = document.createElement("div");
        elem.classList.add("question");
        elem.innerHTML = `
        <div class="question-header">
          <h3>${question.id}. ${question.question}</h3>
        </div>
        <div class="question-answers">
          ${question.answers
            .map((answer) => {
              return `<label>
              <input type="radio" name="question${question.id}" value="${answer}" />
                ${answer}
              </label>`;
            })
            .join("")}
        </div>
        `;
        qDiv.appendChild(elem);
      });
      el.appendChild(qDiv);
    }
  }

  function addEventListener(button, output, questionsList) {
    button.addEventListener("click", () => {
      let correctAnswers = 0;
      questionsList.forEach((question) => {
        const answer = document.querySelector(
          `input[name="question${question.id}"]:checked`
        )?.value;
        if (answer === question.correct_answer) {
          correctAnswers++;
        }
      });
      output.innerHTML = `You got ${correctAnswers} out of ${questionsList.length} questions correct`;
    });
  }
}

QuizApp(document.getElementById("app"), quizzes_list);
