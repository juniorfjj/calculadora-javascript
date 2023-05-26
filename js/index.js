import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { digitar, limpar, pressionarBotao } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"



document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", pressionarBotao)
})
document.getElementById("clear").addEventListener("click", limpar)
document.getElementById("input").addEventListener("keydown", digitar)
document.querySelector('#equal').addEventListener("click", calculate)
document.querySelector('#copyToClipboard').addEventListener("click", copyToClipboard)
document.querySelector('#themeSwitcher').addEventListener("click", themeSwitcher)