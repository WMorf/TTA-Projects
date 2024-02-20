import requests
from bs4 import BeautifulSoup

#Send a request to The Tech Academy’s website
url = "https://learncodinganywhere.com"
response = requests.get(url)

#Create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(response.text, 'html.parser')

#Extract the page title
title_element = soup.find('title')
if title_element:
    page_title = title_element.text
    print("Page Title:", page_title)
else:
    print("Page title not found")