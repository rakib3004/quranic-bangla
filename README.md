# Quranic Bangla
A bangla app for learning **Al-Quran** Word by Word.

## Prepare Quran Dataset In Bangla Word By Word Using Web Scrapping
We scrap word by word Al Quran Bangla Translation from [Hadith BD](https://www.hadithbd.com/quran/byword/)

### Fetch Web Pages From [Hadith BD](https://www.hadithbd.com/quran/byword/)
```python
import requests
import os

for sura_number in range(1,115):
    page=0
    while page <= 15:
      url = f'https://www.hadithbd.com/quran/byword/detail/?pageNum_suraGroup={page}&sura={sura_number}'
      response = requests.get(url)
      html_content = response.content
      if(len(html_content)<35000):
        this_page_length = len(html_content)
        next_page_url = f'https://www.hadithbd.com/quran/byword/detail/?pageNum_suraGroup={page+1}&sura={sura_number}'
        next_page_response = requests.get(next_page_url)
        next_page_html_content = next_page_response.content
        next_page_length = len(next_page_html_content)
        if(this_page_length==next_page_length):
          break;

      file_name = f'/content/drive/MyDrive/__FilePath__/Surah_{sura_number}_{page+1}.html'

      with open(file_name, 'wb') as f:
          f.write(html_content)

      print(f'Surah{sura_number}.{page+1} Length = {len(html_content)}')
      page = page + 1

```

### Web Pages to Quran CSV Dataset
```python
import os
import re
import pandas as pd
from bs4 import BeautifulSoup

def extract_verse_info(surah_file, filename):
    with open(surah_file, 'r', encoding='utf-8') as file:
        content = file.read()

    soup = BeautifulSoup(content, 'html.parser')
    surah_number = ""
    for char in filename:
        if char.isdigit() or char == '-':
            surah_number += char
        elif surah_number and not char.isdigit():
            break
    print('Surah Number is', surah_number)

    verses = []
    for verse_tag in soup.find_all('p', class_='text-info text-right'):
        verse_number = verse_tag.text.strip()
        for word_tag in verse_tag.find_next_siblings('div', class_='col-lg-2 col-md-3 col-sm-6 mb-4 text-right box user-select-all'):
            arabic_word = word_tag.find_next('p', dir='rtl').text.strip()
            english_word = word_tag.find_next('p', dir='ltr', class_='font-kalpurush-reading').text.strip()
            bangla_word = word_tag.find_next('p', dir='ltr', class_='font-kalpurush-reading').text.strip()
            print(f"Surah Number: {surah_number}", end="\t")
            print(f"Verse Number: {verse_number}", end="\t")
            print(f"Arabic Word: {arabic_word}", end="\t")
            print(f"Bangla Word: {bangla_word}")

            verses.append({
              'Surah Number': surah_number,
              'Verse Number': verse_number,
              'Arabic Word': arabic_word,
              'Bangla Word': bangla_word
          })

    return verses

surah_dir = '/content/drive/MyDrive/_FilePath_'

all_verses = []
count=0
for filename in os.listdir(surah_dir):
    if filename.endswith('.html'):
        print(filename)
        surah_file = os.path.join(surah_dir, filename)
        verses = extract_verse_info(surah_file,filename)
        all_verses.extend(verses)


quran_df = pd.DataFrame(all_verses)


output_csv_path = os.path.join(surah_dir, 'database/hugging_face_quranic_bangla.csv')
quran_df.to_csv(output_csv_path, index=False)

print(f"Complete Database Successfully")

```