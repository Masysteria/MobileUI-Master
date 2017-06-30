# MobileUI-Master

MobileUI is a UI that can communicate with your website in real time

First you need to clone the repo to your desktop and run the "npm install" command in order to install
the required modules (Socket.io and Express).

Then you need setup some parameters on some JS files.
Go to app.js en uncomment the line 21 to be able to work in your localhost.
You need to do the same on moblieUI-main.js and mobileUI.js

Each element of the UI has a method in wich you can put your code to interact with your site.
You'll find those methods in main-mobile.js. From there, it's pretty straight forward.
You can make every DOM manipulation you want (jQuery already included) with the click of a button.

The UI contains buttons, sliders and checkboxes.
The buttons react to a click event, the sliders to a change event and so do the checkboxes
The sliders return a value that you can use the way you want.

When going live, just comment the localhost related lines on mobileUI.js and main-mobileUI.js and put the IP of your
site on the line 18 "server.listen(8000, 'Your site IP');" of app.js and the URL of your site
on the line 110 of mobileUI.js and the line 14 of main-mobileUI.js.

After this your're pretty much good to go. Off course you can change the appearence of the MobileUI, but
make sure to keep the IDs provided so the UI works properly.
