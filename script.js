const crypto_db = {
  Bitcoin: {
    price_trend: "rising",
    market_cap: "high",
    energy_use: "high",
    sustainability_score: 3
  },
  Ethereum: {
    price_trend: "stable",
    market_cap: "high",
    energy_use: "medium",
    sustainability_score: 6
  },
  Cardano: {
    price_trend: "rising",
    market_cap: "medium",
    energy_use: "low",
    sustainability_score: 8
  }
};

function handleUserInput() {
  const input = document.getElementById("user-input").value.toLowerCase();
  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += `<div class="user">You: ${input}</div>`;

  let reply = "Sorry, I didn't get that. 🤔 Try asking about trending or sustainable coins.";

  if (input.includes("trending") || input.includes("growth")) {
    for (let coin in crypto_db) {
      const data = crypto_db[coin];
      if (data.price_trend === "rising" && data.market_cap === "high") {
        reply = `CryptoBuddy: ${coin} is trending up with high market cap — a good choice for profitability! 🚀`;
        break;
      }
    }
  } else if (input.includes("sustainable") || input.includes("eco")) {
    let sustainableCoin = "";
    let highestScore = 0;
    for (let coin in crypto_db) {
      const data = crypto_db[coin];
      if (data.energy_use === "low" && data.sustainability_score > highestScore) {
        sustainableCoin = coin;
        highestScore = data.sustainability_score;
      }
    }
    reply = `CryptoBuddy: ${sustainableCoin} is the most sustainable option! 🌱 Score: ${highestScore}/10`;
  }

  chatLog.innerHTML += `<div class="bot">${reply}</div>`;
  document.getElementById("user-input").value = "";
}

