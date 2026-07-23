let lucro = 0,
  c = document.getElementById("mesas");
for (let i = 1; i <= 10; i++) {
  let tot = 0,
    d = document.createElement("div");
  d.className = "mesa livre";
  d.innerHTML = `<h3>Mesa ${i}</h3><div class=s>Status: Livre</div><input class=v type=number placeholder='Valor'><div>Total:R$ <span class=t>0.00</span></div><button class=a>Abrir</button><button class=g>Pagamento</button><button class=f>Fechar</button>`;
  d.querySelector(".a").onclick = () => {
    d.className = "mesa ocupada";
    d.querySelector(".s").textContent = "Status: Ocupada";
    tot += Number(d.querySelector(".v").value) || 0;
    d.querySelector(".t").textContent = tot.toFixed(2);
  };
  d.querySelector(".g").onclick = () => {
    d.className = "mesa pagamento";
    d.querySelector(".s").textContent = "Status: Aguardando pagamento";
  };
  d.querySelector(".f").onclick = () => {
    lucro += tot;
    document.getElementById("lucro").textContent = lucro.toFixed(2);
    tot = 0;
    d.querySelector(".t").textContent = "0.00";
    d.querySelector(".v").value = "";
    d.className = "mesa livre";
    d.querySelector(".s").textContent = "Status: Livre";
  };
  c.appendChild(d);
}
