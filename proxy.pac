function FindProxyForURL(url, host) {

   //http://en.wikipedia.org/wiki/Proxy_auto-config
   //https://productforums.google.com/forum/#!topic/chrome/9IDWpZ5-RAM

   //"C:\...\chrome.exe" --proxy-pac-url="https://k5tmt.com/proxy.pac"

   //Requests for cedarparkserver.com should go through proxy.
   if (shExpMatch(url, '*cedarparkserver.com*')) return 'SOCKS5 localhost:9999';

}