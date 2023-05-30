const { firefox, chromium, webkit } = require('playwright');

(async () => {
  // Tarayıcıyı başlat
  const browser = await chromium.launch();

  // Yeni bir sayfa aç
  const page = await browser.newPage();

  // Sayfayı ziyaret et
  await page.goto('https://google.com');

  // Bekleme
  await page.waitForTimeout(5000);

  // Ekran görüntüsü al
  await page.screenshot({ path: 'example.png' });

  // Tarayıcıyı kapat
  await browser.close();
})();
