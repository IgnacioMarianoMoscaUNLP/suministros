// api/menu.ts  (Ruta pública resultante: https://TU-APP.vercel.app/api/menu)
import type { VercelRequest, VercelResponse } from '@vercel/node';

const SHEET_URL = 'https://opensheet.elk.sh/1rUkhhPLmKwHDyg51m7qeiqx24eJATHdJ1U17BrlkKb8/menu_data';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const r = await fetch(SHEET_URL, { headers: { 'cache-control': 'no-cache' } });
    if (!r.ok) return res.status(r.status).send(await r.text());
    const data = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60');
    res.status(200).json(data);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'fetch failed' });
  }
}
