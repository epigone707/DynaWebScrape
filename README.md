# DynaWebScrape

The DynaWebScrape can download the html, images, css and javascript files of dynamic websites. You can open those websites locally using your browser.  
It is adapted from my previous [WebsitesSaver](https://github.com/epigone707/WebsitesSaver). The new thing is that I'm using selenium in this script to load dynamic content.
# Setup
* Requires Google Chrome
```
$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
$ sudo apt -y install ./google-chrome-stable_current_amd64.deb
$ google-chrome --version
```
* Requires Chromedriver, find your Chromedriver version in [here](https://chromedriver.chromium.org/downloads), copy the url and run:
```
# replace the url after wget
$ wget https://chromedriver.storage.googleapis.com/86.0.4240.22/chromedriver_linux64.zip
$ unzip chromedriver_linux64.zip
$ sudo mv chromedriver /usr/bin/chromedriver
$ sudo chown root:root /usr/bin/chromedriver
$ sudo chmod +x /usr/bin/chromedriver
$ chromedriver --version
```
* Python dependencies can be installed via 
```
$ pip install -r requirements.txt
```
# Usage

Print help message
```
$ python scrape.py -h
```

Save the html file and resource files(img, css, js) of the target web page to local directory
```
$ python scrape.py -u https://www.w3schools.com/
```

Save the websites of all urls in the file <code>testlinks.txt</code>
```
$ python scrape.py -l testlinks.txt
```

# Reference
- https://stackoverflow.com/a/62207356/17381104