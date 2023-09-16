window.addEventListener("load", function () {
  const button = document.getElementById("button");
  //PEGANDO O BUTTON
  button.onclick = function () {
    const inputDay = document.getElementById("day");
    const day = inputDay.value;
    console.log("day", day);

    const inputMonth = document.getElementById("month");
    const month = inputMonth.value;
    console.log("month", month);

    const inputYear = document.getElementById("year");
    const year = inputYear.value;
    console.log("year", year);

    // CHAMAR A FUNÇÃO PARA CALCULAR
    const values = calculateAge(year, month, day);
    console.log("values", values);
    //PEGANDO AS TAGS HTML
    const elementYear = document.getElementsByClassName("years")[0];
    const elementMonth = document.getElementsByClassName("months")[0];
    const elementDay = document.getElementsByClassName("days")[0];
    console.log(
      "elementyear",
      elementYear,
      "elementMonth",
      elementMonth,
      "elementDay",
      elementDay
    );
    elementYear.innerHTML = values.calculateYear;
    elementDay.innerHTML = values.calculateDay;
    elementMonth.innerHTML = values.calculateMonth;
  };
  function calculateAge(year, month, day) {
    //INSTANCIANDO A FUNÇÃO DATE - OBTENDO A HORA ATUAL //
    const date = new Date();
    const currentYear = date.getFullYear(); // pegando as datas atuais
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
    // AQui temos o mês atual
    let calculateYear = currentYear - year;
    let calculateDay = currentDay - day;
    let calculateMonth = currentMonth - month;
    //CASO FOR NEGATIVO MULTIPLICA *-1 PARA TORNAR POSITIVO
    console.log("calculateDay", calculateDay);

    const negativeDay = Math.sign(calculateDay);
    if (negativeDay == -1) {
      calculateDay = calculateDay * -1;
    }
    const negativeMonth = Math.sign(calculateMonth);
    if (negativeMonth == -1) {
      calculateYear = calculateYear - 1;
      calculateMonth = currentMonth;

      // Obtém a quantidade de dias do mês
      const daysInLastMonth = new Date(year, month + 1, 0).getDate();

      // Recalula a quantidade de dias
      calculateDay = daysInLastMonth - calculateDay;
    }
    //RETORNANDO OS VALORES
    return { calculateDay, calculateMonth, calculateYear };
  }
});
