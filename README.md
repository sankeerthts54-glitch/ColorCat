# 🎨 ColorCat

> A fun Chrome extension that lets you **shoot elements on any webpage to randomly recolor them!**

Click the extension icon to toggle it on, then click any element on the page to blast it with a random background color. Toggle it off to go back to normal browsing.

---

## ✨ Features

- 🖱️ Click any element on a page to give it a random background color
- 🎯 Crosshair cursor when active so you know you're in "shoot" mode
- 🔴 Badge indicator on the extension icon shows when it's ON
- ⚡ Smooth 0.2s color transition animation
- 🚫 Works on all websites (except restricted browser pages like `chrome://`)

---

## 🚀 Installation (No Web Store Required)

Since this extension isn't on the Chrome Web Store, you'll load it as an **unpacked extension** — it takes less than a minute!

### Step 1 — Download the Extension

**Option A: Clone with Git**
```bash
git clone https://github.com/sankeerthts54-glitch/ColorCat.git
```

**Option B: Download as ZIP**
1. Click the green **`<> Code`** button on this page
2. Select **Download ZIP**
3. Extract the ZIP to a folder on your computer (e.g. `C:\Users\YourName\ColorCat`)

---

### Step 2 — Open Chrome Extensions Page

Open Google Chrome and go to:

```
chrome://extensions
```

Or navigate there via:
> **Chrome menu (⋮)** → **More Tools** → **Extensions**

---

### Step 3 — Enable Developer Mode

In the top-right corner of the Extensions page, toggle on **Developer mode**.

![Developer Mode toggle in the top right corner]

---

### Step 4 — Load the Extension

1. Click the **"Load unpacked"** button (top-left)
2. In the file picker, navigate to and select the **ColorCat folder** you downloaded/cloned
3. Click **Select Folder**

ColorCat will now appear in your extensions list! 🎉

---

### Step 5 — Pin the Extension (Optional but Recommended)

1. Click the **puzzle piece icon 🧩** in the Chrome toolbar
2. Find **ColorCat** in the list
3. Click the **pin icon 📌** to pin it to your toolbar for easy access

---

## 🎮 How to Use

| Action | What happens |
|--------|-------------|
| Click the 🎨 ColorCat icon | Toggles the extension **ON** (badge shows `ON`) |
| Click any element on a page | That element gets a random background color |
| Click the icon again | Toggles **OFF**, cursor returns to normal |

> **Tip:** You can click the same element multiple times to keep randomizing its color!

---

## 📁 Project Structure

```
ColorCat/
├── manifest.json    # Extension config (Manifest V3)
├── background.js    # Service worker — handles icon clicks & badge
├── content.js       # Injected into pages — handles click coloring
└── style.css        # Adds crosshair cursor when active
```

---

## 🛠️ Compatibility

| Browser | Supported |
|---------|-----------|
| Google Chrome | ✅ Yes |
| Microsoft Edge | ✅ Yes (Chromium-based) |
| Brave | ✅ Yes (Chromium-based) |
| Firefox | ❌ No (uses different extension API) |
| Safari | ❌ No |

> **Minimum Chrome version:** 88+ (Manifest V3 support)

---

## ⚠️ Known Limitations

- Reloading a page resets all color changes (colors are not saved)
- The ON/OFF state is **per-tab** — each new tab starts fresh

---

## 🤝 Contributing

Feel free to fork this repo and make it your own! Some ideas for improvements:

- 💾 Save colors with `localStorage` so they persist on reload
- 🎨 Let users pick a color palette instead of random colors
- ↩️ Add an undo button to revert the last color change
- 🖼️ Add an extension popup UI with controls

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made by <a href="https://github.com/sankeerthts54-glitch">sankeerthts54-glitch</a></p>
