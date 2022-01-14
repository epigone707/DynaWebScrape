from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
import ahk

from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

br = webdriver.Firefox()
br.get('http://www.google.com/')

save_me = ActionChains(br).key_down(Keys.CONTROL)\
         .key_down('s').key_up(Keys.CONTROL).key_up('s')
save_me.perform()