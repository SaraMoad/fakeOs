const setTime = () => {
  const time = new Date();
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  let currentTime = time.toLocaleTimeString(["en-AU"], timeOptions);

  if (currentTime[0] === "0") {
    currentTime = currentTime.replace("0", "");
  }

  document.querySelector("#navBarTime").textContent = currentTime;
};

const getDay = () => {
  let day = "";

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  return day;
};

const updateDate = () => {
  const now = new Date();
  const currentDay = getDay().slice(0, 3);
  const dateOptions = {
    day: "2-digit",
    month: "short",
  };

  let date = now.toLocaleString("en-US", dateOptions).replace("-", " ");

  if (date[4] === "0") {
    date = date.replace("0", "");
  }

  let currentDate = date.concat(" ", currentDay).split(" ").reverse().join(" ");

  document.querySelector("#navBarDate").textContent = currentDate;
};

updateDate();
setInterval(setTime, 1000);
