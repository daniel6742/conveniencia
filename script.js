const c = document.getElementById("mesas");
let lucro = 0,
  p = 0;
for (let i = 1; i <= 10; i++) {
  let d = document.createElement("div");
  d.className = "mesa";
  d.innerHTML = `<h3>Mesa ${i}</h3><input placeholder='Cliente'><textarea placeholder='Pedido'></textarea><input type='number' placeholder='Valor'><button>Salvar</button>`;
  d.querySelector("button").onclick = () => {
    let v = Number(d.querySelectorAll("input")[1].value) || 0;
    lucro += v;
    p++;
    document.getElementById("l").textContent = lucro.toFixed(2);
    document.getElementById("p").textContent = p;
    alert("Pedido salvo!");
  };
  c.appendChild(d);
}
