function createInfoApp() {
  let header = document.getElementById('header');
  header.innerHTML = `
  <h1>InfoApp</h1>
   <h2>Информационное приложение.</h2>
   <hr />
  `;
  let section = document.getElementById('section');
  section.innerHTML =`
  <div id = "time"></div>
  <div id = "weather"></div>
  <div id = "news"></div>
  `;
  let time = document.getElementById("time");
  time.innerHTML=`  
      <h2>Часы с датой:</h2>
      <hr />
     <div id="timedate"> Сегодня:
      <a id = "god">год</a>,
      <a id="cheslo mes"></a>
      <a id ="mes"></a>,
      <a id="den ned"></a>,
      <a id="chas"></a>:
      <a id="min"></a>:
      <a id="sek"></a>.
     </div>
     <br />
     <hr />
    `;
    let timedate = document.getElementById('timedate');
    timedate.style.fontSize = `30px`;
    timedate.style.textAlign = `center`;
    let weather = document.getElementById('weather');
    weather.innerHTML = `
     <h2>Погода на данный момент:</h2>
         <hr />
    <iframe id="iframeW"
    title="Inline Frame Example"
    width="300"
    height="500"
    src="https://andrey-berlin.github.io/weather-presently/">
</iframe>
<hr />
     <h2>Погода по часам и по дням:</h2>
     <hr />
    <iframe id="iframe"
    title="Inline Frame Example"
    width="300"
    height="500"
    src="https://andrey-berlin.github.io/weather/">
</iframe>
<hr />
`;

let news = document.getElementById('news');
news.innerHTML=`
 <h2>Новости:</h2>
 <hr />
<iframe id="iframeN"
    title="Inline Frame Example"
    width="300"
    height="500"
    src="https://news.startpage.co.il/russian/#">
</iframe>
 <hr />`;
let iframe = document.getElementById('iframe');
iframe.style.width = `50%`;
iframe.style.height =``;

let iframeW = document.getElementById('iframeW');
iframeW.style.width = `50%`;
iframeW.style.height =``;
  
let iframeN = document.getElementById('iframeN');
iframeN.style.width = `100%`;
iframeN.style.height =``;

let style = document.getElementById('style');
style.innerHTML= `body{
  
  background:linear-gradient(#fdfacb, #46a5da);
  
}`;

let footer = document.getElementById('footer');
footer.innerHTML = `

 <p>С уважением, Андрей Берлин!</p>

`;

   }
createInfoApp(); 
    function updateClock() {
     const d = new Date();
     let god = document.getElementById("god");
     god.innerHTML = d.getFullYear() + " год";
     
     const months = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
     let month = months[d.getMonth()];
     let mes = document.getElementById("mes");
     mes.innerHTML = month;
     let cheslo = document.getElementById("cheslo mes");
     cheslo.innerHTML = d.getDate();
     const days = ["Вс.","Пн.","Вт.","Ср.","Чт.","Пт.","Суб."];
     let day = days[d.getDay()];
     let den = document.getElementById("den ned");
     den.innerHTML = day;
     let chas = document.getElementById("chas");
     chas.innerHTML = d.getHours();
     let min = document.getElementById("min");
     min.innerHTML = d.getMinutes();
     let sek = document.getElementById("sek");
     sek.innerHTML = d.getSeconds();
     
     
    }
    function initClock() {
        updateClock();
        window.setInterval("updateClock()", 1);
    }

    // END CLOCK SCRIPT
    
