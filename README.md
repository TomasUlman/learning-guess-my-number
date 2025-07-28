# learning-guess-my-number

> ⚠️ This is a study project based on a Udemy course. It is not intended for production use.  
> The README continues in Czech, as this project is part of my personal learning archive.

---

## 🔢 Guess My Number – hra na hádání čísla

Tato hra byla mým vůbec prvním projektem při učení JavaScriptu. Cílem hry je uhodnout náhodně vygenerované číslo mezi 1 a 20.

---

## 💡 Pravidla a funkce

- **Hráč zadá číslo** (1–20) a klikne na `Check!`
- Pokud číslo:
  - je **správně**, zobrazí se výhra a změní se barva pozadí
  - je **mimo rozsah**, zobrazí se chybová hláška
  - je **mimo**, ale v rozsahu → zobrazí se nápověda (`Too high` / `Too low`)
- **Odečítání skóre** při každém chybném pokusu
- **Highscore** se ukládá a zůstává mezi hrami
- **Tlačítko `Again!`** resetuje hru a vygeneruje nové číslo

---

## 🛠 Použité technologie

- **HTML / CSS**
  - Základní layout, stylování pomocí fontu `Press Start 2P`
  - Přizpůsobení velikosti prvků a přechody barev
- **JavaScript (ES6+)**
  - Práce s DOM (`querySelector`, `textContent`, `style`)
  - Event listenery (`click`)
  - Generování náhodného čísla (`Math.random`)
  - Správa stavu (`score`, `highscore`)
  - Přepínání stylů a interakce s UI

---

## 🧠 Co jsem si na projektu vyzkoušel

- První manipulace s DOM a událostmi
- Práce s podmínkami a funkcemi
- Dynamická změna obsahu stránky podle vstupu uživatele
- Oddělení logiky do funkcí (`displayMessage`, `guessCheck`, `scoreCheck`)
- Základní UI feedback (barvy, blokování vstupů)

---

## 🧼 Poznámka

Jednoduchý úvodní projekt bez backendu, zaměřený čistě na porozumění základům interaktivity v JavaScriptu.
