from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import WebDriverException
import os
import sys
import requests
from urllib.parse import urljoin
from urllib.parse import unquote
from bs4 import BeautifulSoup, Comment
import cssutils
import logging
import datetime
import argparse
import validators
import re


def saveFileInTag(soup, pagefolder, url, session, tag2find='img', inner='src'):
    """saves on specified `pagefolder` all tag2find objects"""

    # count for files that doesn't has a filename
    count = 0

    # store the url of all downloaded files, so that we won't download duplicate files
    # key = url, value = filename
    downloaded_src={}

    downloaded_filename=[]


    if not os.path.exists(pagefolder):
        os.mkdir(pagefolder)
    for res in soup.findAll(tag2find):  # images, css, etc..
        try:
            if not res.has_attr(inner):
                # if inner tag (file object) doesn't exists
                continue
            # if tag2find=='link' and res.get('rel') != "stylesheet":
            #     continue
            inner_attribute = res[inner]
            print("\ntag: ", res)
            
            filename = os.path.basename(unquote(inner_attribute))
            filename = filename.split('?')[0]
            # print("filename: ", filename)
            if not filename:
                continue
            if str(filename) == "":
                filename = f"renamed-{tag2find}-{count}"
                count = count + 1
            else:
                filename = f"{str(filename)}"
            # print("filename: ", filename)
            fileurl = urljoin(url, res.get(inner))
            # print("fileurl: ", fileurl)

            
            if fileurl in downloaded_src:
                # if this file has been download, don't download it again
                # update the tag src to let it point to the downloaded file
                filename = downloaded_src[fileurl]
            else:
                # else: this file url hasn't been visited, download it
                header = {
                    'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0'
                }
                filename_counter = 2
                # for example, if we have downloaded file/icon.png as icon.png, 
                # and now need to download image/icon.png
                # we need to rename it as icon(2).png
                while filename in downloaded_filename:
                    filename = filename + "(" + str(filename_counter) + ")" 
                    filename_counter += 1
                filepath = os.path.join(pagefolder, filename)
                # if the file has not been downloaded, download it
                if not os.path.isfile(filepath):  
                    print(f"Download file:")
                    print(f"filename: {filename}")
                    print(f"fileurl: {fileurl}")
                    print(f"filepath: {filepath}")
                    with open(filepath, 'wb') as file:
                        filebin = session.get(fileurl, headers=header)
                        file.write(filebin.content)
                downloaded_src[fileurl] = filename
                downloaded_filename.append(filename)
            
            # update the tag src to let it point to the downloaded file
            res[inner] = os.path.join(os.path.basename(pagefolder), filename)
            print("updated tag: ", res)

        except Exception as exc:
            print("soupfindnSave(): filename: ",
                  filename,
                  "has error:",
                  exc,
                  file=sys.stderr)
    return soup


def updateLink(soup, url, session):
    """
    update all relative url path in <a> tag in the html to absolute url path
    
    Example:
    Update href="/codegame/index.html" to href="https://www.w3schools.com/codegame/index.html"
    """
    for res in soup.findAll('a'):
        try:
            if not res.has_attr('href'):
                continue
            # print("===================")
            res['href'] = updateSingleLink(url, res['href'])
            # print(f"{res['href']}")
        except Exception as exc:
            print("updateLink(): ", exc, file=sys.stderr)
    for res in soup.findAll('link'):
        try:
            if not res.has_attr('href'):
                continue
            # print("===================")
            res['href'] = updateSingleLink(url, res['href'])
            # print(f"{res['href']}")
        except Exception as exc:
            print("updateLink(): ", exc, file=sys.stderr)
    return soup


def updateSingleLink(hosturl, relativeUrl):
    """
    Update a single url path to absolute url path.
    This is a helper function of updateLink()
    """
    if relativeUrl.startswith('/'):
        relativeUrl = urljoin(hosturl[:-1], relativeUrl)
    return relativeUrl


def saveFileInStyle(soup, pagefolder, url, session):
    """
    Save the file in embedded css code
    
    Example:
    <style>
        #bgcodeimg {
            background: #282A35 url("/about/w3codes.png") no-repeat fixed center;
        }
    </style>

    This func will download the png file and change css url to "/pagefolder/w3codes.png"
    
    """
    # def replacer(relativeUrl):
    #     relativeUrl = updateSingleLink(url, relativeUrl)
    #     return relativeUrl

    # cssutils.log.setLevel(logging.CRITICAL)
    # for styles in soup.findAll('style'):
    #     try:
    #         sheet = cssutils.parseString(styles.encode_contents())
    #         cssutils.replaceUrls(sheet, replacer)
    #         styles.string.replace_with(sheet.cssText.decode("utf-8"))
    #         for fileurl in cssutils.getUrls(sheet):
    #             filename = os.path.basename(fileurl)
    #             filename = filename.split('?')[0]
    #             filepath = os.path.join(pagefolder, filename)
    #             if not os.path.isfile(filepath):  # was not downloaded
    #                 with open(filepath, 'wb') as file:
    #                     filebin = session.get(fileurl)
    #                     file.write(filebin.content)

    #         def replacer2(url):
    #             url = os.path.join(os.path.basename(pagefolder), filename)
    #             return url

    #         sheet = cssutils.parseString(styles.encode_contents())
    #         cssutils.replaceUrls(sheet, replacer2)
    #         styles.string.replace_with(sheet.cssText.decode("utf-8"))
    #     except Exception as exc:
    #         print("saveFileInStyle(): ", exc, file=sys.stderr)

    return soup


def addAnnotation(soup, url):
    """
    add a info about url and time on the top of the html file
    """
    comment = Comment(
        f" \nsaved from url = {url}\ncurrent time = {datetime.datetime.now()}\ngithub: github.com/epigone707/WebsitesSaver/"
    )
    soup.html.insert_before(comment)
    return soup


def savePage(url, driver, dir_path='pagefolder'):
    """
    save the page
    """
    print("===================")
    print(f"savePage() start.\ntarget url: {url}\ndownload to: {dir_path}")

    # load a HTML page (can be dynamic)
    driver.get(url)
    print("Loads the web page.")

    # Parse processed webpage with BeautifulSoup
    # print(driver.page_source)
    print("driver.page_source: ")
    print(driver.page_source)
    soup = BeautifulSoup(driver.page_source, features="html.parser")

    # session used for downloading resource files like images, js and css
    session = requests.Session()


    

    plaintext_url = re.sub(r'[^a-zA-Z0-9]', '', url)
    if not os.path.exists(dir_path):
        os.mkdir(dir_path)
    assets_path = dir_path + '/' + plaintext_url + '_assets'

    # if <base> tag exists, need to update the url
    basetag = soup.find('base')
    if basetag:
        print("find a base tag:", basetag)
        if basetag.has_attr("href"):
            baseurl = basetag["href"]
            print("find a baseurl:", baseurl)
            url = urljoin(url, baseurl)
            basetag["href"] = "."
        print("<base> tag exists, update url: ", url)
    

    soup = saveFileInTag(soup,
                         assets_path,
                         url,
                         session,
                         tag2find='img',
                         inner='src')
    soup = saveFileInTag(soup,
                         assets_path,
                         url,
                         session,
                         tag2find='link',
                         inner='href')
    soup = saveFileInTag(soup,
                         assets_path,
                         url,
                         session,
                         tag2find='script',
                         inner='src')
    # soup = saveFileInStyle(soup, assets_path, url, session)
    soup = updateLink(soup, url, session)
    soup = addAnnotation(soup, url)
    html_path = dir_path + '/' + re.sub(r'[^a-zA-Z0-9]', '', url) + '.html'
    with open(html_path, 'wb') as file:
        file.write(soup.prettify('utf-8'))
    print(f"savePage({url}) finish.")
    print("======================================\n")
    return soup


def BFS_get_neighbors(soup):
    """
    Return the neighbors of the input page
    """
    # a list of urls that are the neighbors of the input page
    neighbors = []
    for link in soup.findAll('a'):
        tmpurl = link.get('href')
        if tmpurl is None:
            break 
        # print("tmpurl",tmpurl)
        if validators.url(tmpurl):
            neighbors.append(tmpurl)
    print("BFS_get_neighbors: ",neighbors)
    return neighbors


def BFS(rooturl, driver, dir_path='page', limit=10):
    # List to keep track of visited nodes. We don't want to download duplicate pages.
    visited_urls = []
    # BFS queue
    queue_urls = []
    visited_urls.append(rooturl)
    queue_urls.append(rooturl)
    # count for the number of downloaded pages
    count = 0
    if not os.path.exists(dir_path):
        os.mkdir(dir_path)
    
    while len(queue_urls) > 0 and count < limit:
        node = queue_urls.pop(0)
        print("pop a node: ", node)
        print(queue_urls)
        node_soup = savePage(node, driver, dir_path=dir_path)
        count = count + 1
        for neighbour in BFS_get_neighbors(node_soup):
            if neighbour not in visited_urls:
                visited_urls.append(neighbour)
                queue_urls.append(neighbour)
    print(f"BFS ends. Total number of downloaded web pages: {count} ")


def main():
    # Initialize parser
    msg = "The WebsitesSaver download HTML of a given website and its links to images, CSS and javascript"
    parser = argparse.ArgumentParser(description=msg)
    # Adding optional argument
    parser.add_argument("-u", "--url", help="target url")
    parser.add_argument("-l", "--urllist", help="target urls list")
    parser.add_argument(
        "-b",
        "--bfs",
        type=int,
        help=
        "download pages that the root page links to using BFS. The attribute is the limit number of downloaded pages."
    )
    # Read arguments from command line
    args = parser.parse_args()
    outputPath = []
    targetUrls = []
    # Instantiate options
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')

    service = webdriver.chrome.service.Service("/usr/bin/chromedriver")
    driver = webdriver.Chrome(service=service, options=options)
    print("Intialize the driver.")

    if args.url:
        targetUrls.append(args.url)
        outputPath.append(re.sub(r'[^a-zA-Z0-9]', '', args.url))
    elif args.urllist:
        # open the urls file
        url_file = open(args.urllist, "r")
        targetUrls = url_file.read().splitlines()
        for targetUrl in targetUrls:
            print(targetUrl)
            outputPath.append(re.sub(r'[^a-zA-Z0-9]', '', targetUrl))
    if args.bfs:
        for idx, url in enumerate(targetUrls):
            BFS(url, driver, outputPath[idx], limit=args.bfs)
    else:
        for idx, url in enumerate(targetUrls):
            savePage(url, driver, dir_path=outputPath[idx])
    driver.quit()


if __name__ == '__main__':
    main()