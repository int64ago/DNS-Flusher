DNS Flusher Plus
---

This is a Chrome extenstion which helps you flashing DNS cache by one click.

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/macpeiimcafcnkengponlomdnifabnjc.svg?style=flat-square)](https://chrome.google.com/webstore/detail/dns-flusher-plus/macpeiimcafcnkengponlomdnifabnjc)

Ref: https://github.com/swaydeng/DNS-Flusher (can't work)

## **WARNING**
Launch google-chrome with `--enable-net-benchmarking` !!

 - Ubuntu 16.04

Modify `/usr/share/applications/google-chrome.desktop`, and add `--enable-net-benchmarking` after `Exec=/usr/bin/google-chrome-stable`

Sample script:
```
sudo sed -i -- 's/\/usr\/bin\/google-chrome-stable/\/usr\/bin\/google-chrome-stable --enable-net-benchmarking/g' /usr/share/applications/google-chrome.desktop
```

 - Windows

   - Right click on your "Chrome" icon
   - Choose properties
   - At the end of your target line add `--enable-net-benchmarking`

 - macOS

I've no Mac, so [this](https://goo.gl/7NuUCY) may help you.

## How to use

 - Click icon in toolbar
 - Open right menu, and click the icon
 - Use shortcut: `Command+Shift+F` for Mac or `Ctrl+Shift+F` for others (if not occupied)
