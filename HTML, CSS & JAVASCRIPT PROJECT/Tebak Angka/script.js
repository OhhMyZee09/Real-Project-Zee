let psn1 = document.getElementById("pesan1");
let psn2 = document.getElementById("pesan2");
let psn3 = document.getElementById("pesan3");

let no_of_guesses = 0;
let guessed_nums = [];

// ? Function Pribadi

function mainkan() {
  let jawaban = Math.floor(Math.random() * 100) + 1;

  let pilihan_player = document.getElementById("guess").value;

  if (pilihan_player < 1 || pilihan_player > 100) {
    alert("Masukan angka dari 1 sampai 100 aja.");
  } else {
    guessed_nums.push(pilihan_player);
    no_of_guesses += 1;
  }

  if (pilihan_player < jawaban) {
    psn1.textContent = "Your guess is too low.";
    psn2.textContent = "No. of guesses: " + no_of_guesses;
    psn3.textContent = "Guessed numbers are: " + guessed_nums;
  } else if (pilihan_player > jawaban) {
    psn1.textContent = "Your guess is to high.";
    psn2.textContent = "No. of guesses: " + no_of_guesses;
    psn3.textContent = "Guessed numbers are: " + guessed_nums;
  } else if (pilihan_player == jawaban) {
    psn1.textContent = "Yippie You Win!!";
    psn2.textContent = "The number was: " + jawaban;
    psn3.textContent = "You guesses it in " + no_of_guesses + " guesses";
    document.getElementById("my-btn").disabled = true;
  }
}

// function play() {
//   let user_quess = document.getElementById("guess").value;

//   if (user_quess < 1 || user_quess > 100) {
//     alert("Please enter a number between 1 and 100.");
//   } else {
//     guessed_nums.push(user_guess);
//     no_of_guesses += 1;

//     if (user_quess < answer) {
//       psn1.textContent = "Your guess is too low.";
//       psn2.textContent = "No. of guesses: " + no_of_guesses;
//       psn3.textContent = "Guessed numbers are: " + guessed_nums;
//     } else if (user_quess > answer) {
//       psn1.textContent = "Your guess is to high.";
//       psn2.textContent = "No. of guesses: " + no_of_guesses;
//       psn3.textContent = "Guessed numbers are: " + guessed_nums;
//     } else if (user_quess == answer) {
//       psn1.textContent = "Yippie You Win!!";
//       psn2.textContent = "The number was: " + answer;
//       psn3.textContent = "You guesses it in " + no_of_guesses + " guesses";
//       document.getElementById("my-btn").disabled = true;
//     }
//   }
// }
