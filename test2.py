from selenium import webdriver
import os
import io
import ahk
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

options = webdriver.ChromeOptions()

options.add_argument('--headless')
options.add_argument('--disable-dev-shm-usage')

driver = webdriver.Chrome(executable_path=r'/usr/bin/chromedriver', options=options)


# driver.get("http://212.129.3.102/qs=r-acacafcjeeidafjbijefiafcjkiabababaefadbfaccajbiaddhcacbcdeeacb")

driver.get("https://www.w3schools.com/")
driver.implicitly_wait(10)
ahk.start()
ahk.ready()
ahk.execute("Send,^s")
ahk.execute("WinWaitActive, Save As,,2")
ahk.execute("WinActivate, Save As")
ahk.execute("Send, C:\\path\\to\\file.htm")
ahk.execute("Send, {Enter}")
driver.quit()

        