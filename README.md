# MiGastos
Multi-currency income/expense tracker with bank cards, FX brokers/firms, themes and offline support. Data stays in your browser (IndexedDB), so use **Settings → Data → ⬇ JSON** to back up.

## What's in it
- **Transaction** (was Month) – sections and categories you add here belong to that month only (remove them in Edit, or carry them to next month).  default Income and Expenses categories (edit, hide, reorder or add your own). The selected month is highlighted. Every amount starts at `0.00`.
- **Summary** (was Year) – balance overview with change today / this month / previous month (Day · Month · Year chart), a yearly Income-vs-Expenses bar chart, monthly chart, breakdowns and a month table with running balance.
- **Wallet** (was Cards) – bank cards hidden behind tabs. Tap a tab to show the card, tap the card to flip it and edit its balance.
- **FX** – brokers / firms as tabs. Tap a tab to open its card and edit the firm name, account names, amounts and currencies right on it (no flipping). Values count in the header balance.
- **Diary** – a daily journal with a calendar. Days with a note get a dot (coloured by mood), plus streak, search and a .txt export. Saved by year-month-day.
- **Exchange** (was Convert) – converter for every listed currency.
- **Settings** – your name, themes (with the **MiGastos Default** theme and a one-tap restore), currencies (show 1–3 in the header), years, default categories, backup.

## Repository layout
```
index.html
sw.js
manifest.webmanifest
.nojekyll
icons/
  favicon.svg  logo.svg
  icon-192.png  icon-512.png  icon-maskable-512.png  apple-touch-icon.png
fonts/
  inter-latin-wght-normal.woff2  Inter-OFL-LICENSE.txt   (Inter, self-hosted so it works offline)
```

## Publish on GitHub Pages
1. Create a repo and upload everything in this folder (keep `icons/` as is).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open `https://<user>.github.io/<repo>/`.

After updating, reload once or twice so the offline cache picks up the new version.

## Wallet links
In Transaction, every row has a wallet picker. Income adds to that wallet, expenses deduct from it, and the wallet balance updates live. ✕ removes a category or section from that month (clears its amount there); ⊘ only hides it.
