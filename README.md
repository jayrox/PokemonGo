# PokemonGo
various Pokemon Go tools



----
# Android Tasker Scripts:

* PokemonGo-UpdateDisplayTimeout.xml  

Updates the Android display timeout to 60 minutes when Pokemon Go is open, sets it back to 30 seconds when closed.


* PokemonGo-UpdateMapScanLocation.xml  

Updates the scanner start point every 45 mins keeping your map scanner scanning your general location.
Can be manually ran within Tasker to update the location quicker.
You will need to update the ``server:port`` within Tasker to point to your map scanner's ``server:port``



----
# Slack-bot

Node.js slack-bot that acts as a webhook for various Pokemon Go map scanners  
Sends Pokemon Name, Expiration time and Google Maps coordinates to slack channel.

configure:  
update ``config.json`` with slack channel and webhook url for the channel

run:  
``npm install``  
``npm start``

update the map scanner to have its webhook pointed at the Slack-bot's url.
``-wh http://localhost:8081/``
