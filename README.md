# fmasson01
Supplementary Assessment for CSC7062 Web Development QUB

THE FOLLOWING IS OUT OF DATE AND NEEDS TO BE CHANGED

Instructions on how to run the system locally.
Can include screenshots of how to run the system locally.
1. The following two software applications should be installed on the machine that the 
system will run on:
- XAMPP if it is a Windows machine, or MAMP if it is an Apple Machine
- Visual Studio Code 
2. Extract attached zip file
3. Click ‘start’ on the Apache service, then click ‘start’ on the MySQL service. 
4. Before progressing, check that MySQL is running on port 3306 on Windows or port 8889 
if using a Mac. If using a Mac, the port number needs to be changed manually in Visual 
Studio Code. To do this, open the file ‘app.js’ and locate line 16 and change the 
‘Password’ to ‘root’, then on line 18, change the ‘port’ number to 8889. Finally, click 
‘Admin’ on the MySQL service.
5. The phpMyAdmin server should be opened by clicking ‘Admin’ on the MySQL service.
6. Create a new database in phpMyAdmin by clicking ‘new’ in the left column. In the field 
‘Database name’ type ‘stacks_of_wax’ and click the ‘create’ button.
7. Locate the new stacks_of_wax database which has now been created by clicking on the 
name in the left column. From the top menu, select ‘Import’. On this page select the 
‘choose file’ button and navigate to where ‘stacks_of_wax.sql’ is located in your system 
files. 
8. In Visual Studio Code, create a new terminal by clicking ‘Terminal’ and selecting ‘New 
Terminal’. Alternatively, this can also be achieved using the shortcut Ctrl+Shift+’
9. In the new terminal that has just been created, type in the command: npm install 
nodemon –save-dev
10. To run the server, type in the command ‘npx nodemon’ and press the enter key
11. To render the website, open the Google Chrome browser and type the following url into 
the address bar: ‘http://localhost:3000’. You can now use the website.