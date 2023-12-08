function calcularForcaEletrica() {
  const k = 9e9; // constante eletrostática em N m^2/C^2

  const q1 = parseFloat(document.getElementById("q1").value);
  const q2 = parseFloat(document.getElementById("q2").value);
  const distance = parseFloat(document.getElementById("distance").value);

  const force = (k * Math.abs(q1) * Math.abs(q2)) / Math.pow(distance, 2);

  document.getElementById("result").innerText = `Força Elétrica: ${force.toExponential(2)} N`;
}
