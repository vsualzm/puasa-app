const countdown = () => {
  const hariPuasa = new Date("April 2, 2022 00:00:00").getTime();
  const sekarang = new Date().getTime();
  const gap = hariPuasa - sekarang;

  //  cara jam bekerja
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // kalkulasi

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;
};

setInterval(countdown, 1000);
