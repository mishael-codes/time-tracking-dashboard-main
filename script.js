import timeranges from "./data.json" assert { type: "json" };

let dailyBtn = document.querySelector(".daily");
let weeklyBtn = document.querySelector(".weekly");
let monthlyBtn = document.querySelector(".monthly");

let workCurrent = document.getElementById("work-current");
let workPrevious = document.getElementById("work-previous");
let playCurrent = document.getElementById("play-current");
let playPrevious = document.getElementById("play-previous");
let studyCurrent = document.getElementById("study-current");
let studyPrevious = document.getElementById("study-previous");
let exerciseCurrent = document.getElementById("exercise-current");
let exercisePrevious = document.getElementById("exercise-previous");
let socialCurrent = document.getElementById("social-current");
let socialPrevious = document.getElementById("social-previous");
let selfCareCurrent = document.getElementById("self-care-current");
let selfCarePrevious = document.getElementById("self-care-previous");

dailyBtn.addEventListener("click", () => {

    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");

  let prevDay = document.querySelectorAll(".previous-time");
  //this changes the text for the time range for all classes with the .previous-time class
  prevDay.forEach((card) => {
    card.innerText = "Yesterday - ";
  });

  workCurrent.textContent = timeranges[0].timeframes.daily.current; //5
  workPrevious.textContent = timeranges[0].timeframes.daily.previous; //7
  playCurrent.textContent = timeranges[1].timeframes.daily.current; //1
  playPrevious.textContent = timeranges[1].timeframes.daily.previous; //2
  studyCurrent.textContent = timeranges[2].timeframes.daily.current; //0
  studyPrevious.textContent = timeranges[2].timeframes.daily.previous; //1
  exerciseCurrent.textContent = timeranges[3].timeframes.daily.current; //1
  exercisePrevious.textContent = timeranges[3].timeframes.daily.previous; //1
  socialCurrent.textContent = timeranges[4].timeframes.daily.current; //1
  socialPrevious.textContent = timeranges[4].timeframes.daily.previous; //3
  selfCareCurrent.textContent = timeranges[5].timeframes.daily.current; //0
  selfCarePrevious.textContent = timeranges[5].timeframes.daily.previous; //1
});

weeklyBtn.addEventListener("click", () => {

    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

  let prevWeek = document.querySelectorAll(".previous-time");
  //this changes the text for the time range for all classes with the .previous-time class
  prevWeek.forEach((card) => {
    card.innerText = "Last Week - ";
  });

  workCurrent.textContent = timeranges[0].timeframes.weekly.current; //32
  workPrevious.textContent = timeranges[0].timeframes.weekly.previous; //36
  playCurrent.textContent = timeranges[1].timeframes.weekly.current; //10
  playPrevious.textContent = timeranges[1].timeframes.weekly.previous; //8
  studyCurrent.textContent = timeranges[2].timeframes.weekly.current; //4
  studyPrevious.textContent = timeranges[2].timeframes.weekly.previous; //7
  exerciseCurrent.textContent = timeranges[3].timeframes.weekly.current; //4
  exercisePrevious.textContent = timeranges[3].timeframes.weekly.previous; //5
  socialCurrent.textContent = timeranges[4].timeframes.weekly.current; //5
  socialPrevious.textContent = timeranges[4].timeframes.weekly.previous; //10
  selfCareCurrent.textContent = timeranges[5].timeframes.weekly.current; //2
  selfCarePrevious.textContent = timeranges[5].timeframes.weekly.previous; //2
});

monthlyBtn.addEventListener("click", () => {

    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.add("active");

  let prevMonth = document.querySelectorAll(".previous-time");
  //this changes the text for the time range for all classes with the .previous-time class
  prevMonth.forEach((card) => {
    card.innerText = "Last Month - ";
  });

  workCurrent.textContent = timeranges[0].timeframes.monthly.current; //103
  workPrevious.textContent = timeranges[0].timeframes.monthly.previous; //128
  playCurrent.textContent = timeranges[1].timeframes.monthly.current; //23
  playPrevious.textContent = timeranges[1].timeframes.monthly.previous; //29
  studyCurrent.textContent = timeranges[2].timeframes.monthly.current; //13
  studyPrevious.textContent = timeranges[2].timeframes.monthly.previous; //19
  exerciseCurrent.textContent = timeranges[3].timeframes.monthly.current; //11
  exercisePrevious.textContent = timeranges[3].timeframes.monthly.previous; //18
  socialCurrent.textContent = timeranges[4].timeframes.monthly.current; //21
  socialPrevious.textContent = timeranges[4].timeframes.monthly.previous; //23
  selfCareCurrent.textContent = timeranges[5].timeframes.monthly.current; //7
  selfCarePrevious.textContent = timeranges[5].timeframes.monthly.previous; //11
});