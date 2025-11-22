const tempF = 85; // degrees Fahrenheit
const windMph = 10; // mph
const cond = 'Sunny';

document.getElementById('temp').textContent = tempF;
document.getElementById('wind').textContent = windMph;
document.getElementById('cond').textContent = cond;

function calculateWindChill(tempF, windMph) {
  // Standard NOAA formula for wind chill (°F)
  return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windMph, 0.16) + 0.4275 * tempF * Math.pow(windMph, 0.16);
}

(function updateWindChill() {
  const out = document.getElementById('windchill');
  if (tempF <= 50 && windMph > 3) {
    const wc = calculateWindChill(tempF, windMph);
    out.textContent = Math.round(wc * 10) / 10; // one decimal
  } else {
    out.textContent = 'N/A';
  }
})();

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;