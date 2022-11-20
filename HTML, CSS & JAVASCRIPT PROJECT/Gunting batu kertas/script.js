let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");
let choices_object = {
  rock: {
    rock: "draw",
    scissor: "win",
    paper: "lose",
  },
  scissor: {
    rock: "lose",
    scissor: "draw",
    paper: "win",
  },
  paper: {
    rock: "win",
    scissor: "lose",
    paper: "draw",
  },
};

function checker(input) {
  let choices = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);

  document.getElementById("comp_choice").innerHTML = ` Computer choose <span> ${choices[num].toUpperCase()}</span>`;

  document.getElementById("user_choice").innerHTML = `You choose <span> ${input.toUpperCase()} </span>`;

  let computer_choice = choice[num];

  switch (choice_object[input][computer_choice]) {
    case `win`:
      result_ref.style.cssText = "background-color: #cefdce";
      result_ref.innerHTML = "GG BET LAWAN BOT MENANG WKWK!";
      user_score++;
      break;
    case `lose`:
      result_ref.style.cssText = "background-color: #ffdde0";
      result_ref.innerHTML = "KAMU KALAH HEHE!";
      computer_score++;
      break;
    case `draw`:
      result_ref.style.cssText = "background-color: #e5e5e5";
      result_ref.innerHTML = "SERI COEK!";
      break;
  }
  document.getElementById("computer_score").innerHTML = computer_score;
  document.getElementById("user_score").innerHTML = user_score;
}
