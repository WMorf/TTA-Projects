import requests
from bs4 import BeautifulSoup

#Send a request to The Tech Academy’s website
url = "https://www.learncodinganywhere.com/codingbootcamps/"
response = requests.get(url)

#Create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(response.text, 'html.parser')

#Extract the page title
footer_element = soup.find('footer')
if footer_element:
    page_footer = footer_element.text
    print("Page Footer:", page_footer)
else:
    print("Page footer not found")