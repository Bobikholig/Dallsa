const webhookURL = "https://discord.com/api/webhooks/1486349002587902148/e2QklMQ1QAzwLfgs3LVVtWMEMDtJ4ec9rHZD1blpbYEUTswI1-iEgTnW1K4zYEZ7MXtc";

document.getElementById("reportForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nick = document.getElementById("nick").value;
  const staticId = document.getElementById("staticId").value;
  const dept = document.getElementById("dept").value;
  const link = document.getElementById("link").value;

  const now = new Date().toLocaleString();

  const data = {
    embeds: [{
      title: "📋 Новый рапорт на повышение",
      color: 3447003,
      fields: [
        { name: "👤 Ник", value: nick, inline: true },
        { name: "🆔 Static ID", value: staticId, inline: true },
        { name: "🏢 Подразделение", value: dept, inline: true },
        { name: "📅 Дата", value: now },
        { name: "🔗 Скриншоты", value: link }
      ],
      footer: {
        text: "LSPD System"
      }
    }]
  };

  try {
    await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    document.getElementById("status").innerText = "✔ Отправлено";
  } catch {
    document.getElementById("status").innerText = "❌ Ошибка";
  }
});
