# Gnome_Depot

This is a back-end web application that functions as an inventory management system for a made-up store called Gnome Depot. There are a couple of different JavaScript files that will do different things to a MySQL database that lists all of the products that are in Gnome Depot's inventory. This web application is powered by using Node.js and utilizes MySQL to contain all of the information for the products that are carried by Gnome Depot. Below is how this application works:

For the gnomedepot_customer.js:

1.Make sure that your terminal is in the same folder as the gnomedepot_customer.js file is in:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/)

2.Next run the application by typing in "node gnomedepot_customer.js" and hitting enter

3.After running the application, you should get an array of all of the objects that are in the gnome depot products database:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/)

4.After the array of objects within the database appears, hit the spacebar to continue. Once you do this you will be given a prompt asking for the Item ID of the product that you want to buy. Enter in one of the IDs for one of the products in the array and hit enter to continue. After you hit enter, you will be prompted by another question asking how much of the product that you would like to buy; enter a number that is less than or equal to the amount of the product that you entered for the previous question and hit enter again:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/)

5.After you hit enter again, if the transaction was sucessful, you will get the following message:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/)

And the stock quantity will be automatically update in the database as well. 

For the gnomedepotManager.js:

1.Like the previous file, make sure your terminal is in the same folder as the gnomedepotManager.js file and once it is, type in "node gnomedepotManager.js" into the terminal and hit enter. 

2.Once you hit enter, you will be given a series of choices that will all do different things once they are selected. Use the arrow keys to select an option and hit enter to execute that option:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/)

By choosing the "View products for sale" option, a table will be printed into the console
