// Timeout
// 1 - Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato

(function () {
  const logCurrentHour = () => {
    console.log(new Date().getHours() + ":" + new Date().getMinutes());
  };
  setTimeout(logCurrentHour, 1_000);
  setTimeout(logCurrentHour, 5_000);
  setTimeout(logCurrentHour, 10_000);
})();

// 2-
(function () {
  const logCurrentHour = () => {
    console.log(new Date().getHours() + ":" + new Date().getMinutes());
  };
  const array = [1, 5, 10];
  array.forEach((element, index, array) => {
    setTimeout(() => logCurrentHour, 1000 * element);
  });
})();

// Interval
// 3- Fare il console.log analogo a quello mostrato su time.is

(function () {
  const logCurrentHour = () => {
    console.log(new Date().getHours() + ":" + new Date().getMinutes());
    clearInterval(() => timerID);
  };
  setInterval(logCurrentHour, 1_000);
  setInterval(logCurrentHour, 5_000);
  setInterval(logCurrentHour, 10_000);
})();

// 4- dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se fosse un tombola, un numero.
// Cancelliamo l'interval quando avremo pescato tutti i numeri possibili. tip: Contiamo quante volte abbiamo fatto parte l'intervallo

(function () {
  const array = [42, 23, 1, 7, 12, 99];
  const extractElement = () => {
    console.log(element, index, array);
    clearInterval(timerID * setInterval.count);
  };

  setInterval(extractElement, 1_000);
})();

// DOM
// 1- Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""


(function () {
    const currentTime = () => {
        const hours = new Date()getHours();
        const minutes = new Date()getMinutes();
        const seconds = new Date()getseconds();
    }
    console.log(hours, minutes, seconds);
    document.body.innerHTML =
    <div>${hours} ${minutes} ${seconds}</div>
})();
