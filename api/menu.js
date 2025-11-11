// api/menu.js (CommonJS)
const SHEET_URL = 'https://opensheet.elk.sh/1rUkhhPLmKwHDyg51m7qeiqx24eJATHdJ1U17BrlkKb8/menu_data';

module.exports = async function handler(req, res) {
  try {
    const r = await fetch(SHEET_URL, { headers: { 'cache-control': 'no-cache' } });
    if (!r.ok) {
      const text = await r.text();
      return res.status(r.status || 502).send(text || 'upstream error');
    }
    const data = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60');
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err?.message || 'handler failed' });
  }
};
