import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama adha vaeda karanavaa.');
  await page.getByText('මම අද වැඩ කරනවා.').click();
});


test('Pos_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama paasal yanavaa, haebaeyi havasa amathara panthiyata yannee naee.');
  await page.getByText('මම පාසල් යනවා, හැබැයි හවස අමතර පන්තියට යන්නේ නෑ.').click();
});

test('Pos_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('viBhaagayata lakuNu madhi vunee mama paadam nokala nisaa.');
  await page.getByText('විභාගයට ලකුණු මදි වුනේ මම පාඩම් නොකල නිසා.').click();
});

test('Pos_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa udhee vaedata yanne kiiyatadha?');
  await page.getByText('ඔයා උදේ වැඩට යන්නෙ කීයටද?').click();
});

test('Pos_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata dhenna');
  await page.getByText('මට දෙන්න').click();
});

test('Pos_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama havasa enne naehae.');
  await page.getByText('මම හවස එන්නෙ නැහැ.').click();
});

test('Pos_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suba raathriyak veevaa!');
  await page.getByText('සුබ රාත්‍රියක් වේවා!').click();
});

test('Pos_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa mata eya labaa gaeniimata haekidha?');
  await page.getByText('කරුණාකරලා මට එය ලබා ගැනීමට හැකිද?').click();
});

test('Pos_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adoo, mokakdha venne?');
  await page.getByText('අඩෝ, මොකක්ද වෙන්නෙ?').click();
});

test('Pos_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ammaa anidhdhaa enavaa.');
  await page.getByText('අම්මා අනිද්දා එනවා.').click();
}); 


test('Pos_Fun_0011 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama school ekata gihin havasa class yanavaa.');
  await page.getByText('මම school එකට ගිහින් හවස class යනවා.').click();
}); 

test('Pos_Fun_0012 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('maamalaa heta colombo enavaa.');
  await page.getByText('මාමලා හෙට colombo එනවා.').click();
}); 

test('Pos_Fun_0013 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(' uyanavadha?');
  await page.getByText(' උයනවද?').click();
}); 

test('Pos_Fun_0014 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(' ov ov ehema karanna.');
  await page.getByText(' ඔව් ඔව් එහෙම කරන්න.').click();
}); 


test('Pos_Fun_0015 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(' api kaeema uyamu.');
  await page.getByText(' අපි කෑම උයමු.').click();
}); 

test('Pos_Fun_0016 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Rs. 2500 pamaNi.');
  await page.getByText(' Rs. 2500 පමණි.').click();
}); 

test('Pos_Fun_0017 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama adha havasa                          kaeema   uyanavaa.');
  await page.getByText(' මම අද හවස                          කෑම   උයනවා.').click();
}); 

test('Pos_Fun_0018 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha vaessa nisaa paara tikak vahala thibunaa saha minisunta vaeda karanna amaaru unaa.');
  await page.getByText(' අද වැස්ස නිසා පාර ටිකක් වහල තිබුනා සහ මිනිසුන්ට වැඩ කරන්න අමාරු උනා.').click();
}); 

test('Pos_Fun_0019 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama   pansal yanavaa.');
  await page.getByText('මම   පන්සල් යනවා.').click();
}); 

test('Pos_Fun_0020 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama pansal yanavaa .api passe kathaa karamu.');
  await page.getByText('මම පන්සල් යනවා .අපි පස්සෙ කතා කරමු.').click();
}); 

test('Pos_Fun_0021 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama paasalee innavaa saha api heta gaman yamu kiyalaa hithan innavaa.');
  await page.getByText('මම පාසලේ ඉන්නවා සහ අපි හෙට ගමන් යමු කියලා හිතන් ඉන්නවා.').click();
}); 


test('Pos_Fun_0022 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ela machan!');
  await page.getByText('එල මචන්!').click();
}); 

test('Pos_Fun_0023 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata eeka one!');
  await page.getByText('මට ඒක one!').click();
}); 

test('Pos_Fun_0024 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('puLuvandha mata eeka dhenna?');
  await page.getByText('පුළුවන්ද මට ඒක දෙන්න?').click();
});