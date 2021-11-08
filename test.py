from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import WebDriverException
from bs4 import BeautifulSoup
import pathlib
import os
import sys


# Instantiate options
options = webdriver.ChromeOptions()
options.add_argument('--headless')

# Set the location of the webdriver
chrome_driver = "/usr/bin/chromedriver"
try:
    # Instantiate a webdriver
    service = webdriver.chrome.service.Service(chrome_driver)
    driver = webdriver.Chrome(service=service, options=options)
except WebDriverException as e:
    print("Error initalizing driver:\n", e)

# load a HTML page
# url = "https://www.python.org"

# load a local dynamic page, 
# should show: <div id="test">I love Scraping</div>
# rather than: <div id="test">Web Scraping is hard</div>
path = os.path.abspath("test.html")
url = pathlib.Path(path).as_uri()

driver.get(url)

# Parse processed webpage with BeautifulSoup
soup = BeautifulSoup(driver.page_source, features="html.parser")
print(soup)