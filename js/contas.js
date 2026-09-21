async function carregarContas() {
  const resposta = await fetch("contas.json");
  const contas = await resposta.json();

  const grid = document.querySelector(".grid");
  if (!grid) return;

  grid.innerHTML = "";

  contas.forEach(conta => {

    grid.innerHTML += `
      <div class="wanted">

        <div class="poster">
          🏴‍☠️
        </div>

        <div class="info">

          <div class="rarity">${conta.raridade}</div>

          <h2>${conta.titulo}</h2>

          <p>${conta.raca} • ${conta.frutas}</p>

          <div class="price">
            R$ ${conta.preco}
          </div>

          <div class="status">
            ${conta.status}
          </div>

          <a class="buy" href="produto.html?id=${conta.id}">
            Ver Recompensa
          </a>

        </div>

      </div>
    `;

  });
}

carregarContas();
