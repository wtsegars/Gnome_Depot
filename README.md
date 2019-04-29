# Gnome_Depot

This is a back-end web application that functions as an inventory management system for a made-up store called Gnome Depot. There are a couple of different JavaScript files that will do different things to a MySQL database that lists all of the products that are in Gnome Depot's inventory. This web application is powered by using Node.js and utilizes MySQL to contain all of the information for the products that are carried by Gnome Depot. Below is how this application works:

For the gnomedepot_customer.js:

1.Make sure that your terminal is in the same folder as the gnomedepot_customer.js file is in:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/filelocation.png)

2.Next run the application by typing in "node gnomedepot_customer.js" and hitting enter

3.After running the application, you should get an array of all of the objects that are in the gnome depot products database:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/customerproductlist.png)

4.After the array of objects within the database appears, hit the spacebar to continue. Once you do this you will be given a prompt asking for the Item ID of the product that you want to buy. Enter in one of the IDs for one of the products in the array and hit enter to continue. After you hit enter, you will be prompted by another question asking how much of the product that you would like to buy; enter a number that is less than or equal to the amount of the product that you entered for the previous question and hit enter again:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/customerpurchase.png)

5.After you hit enter again, if the transaction was sucessful, you will get the following message:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/transactioncomplete.png)

And the stock quantity will be automatically update in the database as well. 

For the gnomedepotManager.js:

1.Like the previous file, make sure your terminal is in the same folder as the gnomedepotManager.js file and once it is, type in "node gnomedepotManager.js" into the terminal and hit enter. 

2.Once you hit enter, you will be given a series of choices that will all do different things once they are selected. Use the arrow keys to select an option and hit enter to execute that option:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/managerchoices.png)

By choosing the "View products for sale" option, a table will be printed into the console that contains all of the item IDs, names, quantity, and dollar amount for each product:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/inventorytable.png)

By choosing the "View low inventory" option, a table will be printed to the console that contains all of the information for all of the products that have a quantity of 5 or less. 

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/lowinventorytable.png)

By choosing the "Add to inventory" option, a series of questions will appear on the console that will prompt the user to enter the name of the product whos inventory is being increased and by how much:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/addinventory.png)

A message will then appear on the screen after the user hits enter after answering the last question that looks like this:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/inventoryupdate.png)

By choosing the "Add new product" option, a series of questions will appear on the console that will ask about the new product's name, item ID, price, quantity, and what department it will go into:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/addnewproduct.png)

After hitting enter after anwswering the last question, this message will appear on the screen:

![alt text](https://github.com/wtsegars/Gnome_Depot/blob/master/images/newproductcomplete.png)
