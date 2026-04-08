import urllib.request

html = urllib.request.urlopen("http://localhost:8080/silkscreen/").read().decode("utf-8")
print(html[-500:])
