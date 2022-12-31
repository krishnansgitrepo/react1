first react app

1. Emmet - extension - html boiler plate code and formatting

2. lib vs framework
lib - pre-written stuff that gives functionality that my code can tap into
framework - provides few places where I can plug my code, and framework will call those. 

my code -> js lib
my code <--frmework

3. CDN - Content delivery network
for performance and availability reasons, edge servers cache static content. so static content is served from closest data center's edge server (and not from source server).

4.react is known as react
bcos react reacts to state changes
when state changes - react updates the DOM

5. crossorigin script tag possible values- anonymous/use-credentials
anonymous - identifying info about the browser is not sent to server
use-credentials - identifying info is sent to the server

6.React package- helps to create components
ReactDOM package - glue between React and actual DOM(index.html DOM).

7. react.development.js = dev version, non minified version of react lib
react.production.js = prod version, minified.


8.async vs defer - how/when js is parsed.

aync - 
fetches JS (from network) when parsing html (i.e., in parallel). 
js scripts are executed then and there after fetching from network before starting html parsing again.
downside - if there are multiple js modules where 1 module depends on other, with this approach, since that other module is not loaded, can run into issues.

defer-
fetches JS (from network) when parsing html (i.e., in parallel).
js scripts are executed only after all html is parsed. i.e., so all js modules (dependent are available) are available before executing js script.