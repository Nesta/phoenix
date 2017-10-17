INTRODUCTION TO STARTERKIT
--------------------------

You should never modify a theme that is packaged and released from Drupal.org 
because, if you do, all your changes will be lost once that theme is updated.
Instead, you should create a subtheme from one of the starterkits folders. 
Once you've donde that, you can override styles, templates...


INSTRUCTIONS
------------

1.- Copy the STARTERKIT from this directory into themes/custom directory.

2.- Rename the directory to a machine readable name you choose for your 
subtheme (we're going to call THEMENAME for these explanations). You need to 
rename info.yml file to THEMENAME.info.yml, because is the primary file Drupal
uses to determine if a theme exists.

3.- Edit THEMENAME.info.yml and change the name, description and other 
properties you need. Make sure you've renamed the libraries path too,
for example:
- mytheme/global-css --> THEMENAME/global-css
- mytheme/global-js  --> THEMENAME/global-js

4.- Replace all the files names in theme root directory with the new name of 
your theme. Don't forget to take a look at its content, maybe you have a 
'mytheme' word to change for your 'THEMENAME'.

5.- Rename the configuration files located in ./THEMENAME/config/install and 
./THEMENAME/config/schema and its content.

7.- Search in all the files the word 'mytheme' and make sure there isn't any 
word to change for your THEMENAME.

8.- Enable your new subtheme: go to admin/appearance and click the "Enable
and set default" option.

Now you can override everything you need in your subtheme. If you need some
file, you can took from Da Vinci original theme.

Don't forget read the Da Vinci README.md for know more about installation,
files and usage.
