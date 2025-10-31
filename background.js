// Background script para extensão de navegador (ex: Chrome extension)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getData") {
    fetch('https://api.exemplo.com/data')
      .then(response => response.json())
      .then(data => {
        sendResponse({ success: true, data: data });
      })
      .catch(error => {
        sendResponse({ success: false, error: error.message });
      });
    return true;
  }
});

setInterval(() => {
  console.log("Background script executando tarefa periódica...");
}, 10000);

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extensão instalada. Background script ativo.");
});