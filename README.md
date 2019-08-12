# Bamazon App

**Its a simple app, select the item you want to buy from a prdefined list, and aided by question prompts. If their is enough product available for your purchase you'll get a reciept, otherwise you'll be asked to update your quantity.** 

## Whats running it?

* Bamazon runs on node.js, a couple npm packages such as inquire to assist with question prompts, and console.table to make the conversion of data into a formated table easy. All data for this is kept a mySQL database and updates happen in live time. 
    ##### Check out this demo: https://drive.google.com/file/d/1OsDsTs7n7WVkK11iUz_UuusByQGADoFL/view

### Step 1: Running the program

*   Because their is no front end to view this app on it is displayed using your computers terminal.

    * Make sure you are accseing the application within you computers terminal. You can get here quickly by launchingit in termainal and running the following line. *node bamazonCustomer.js*

### Step 2: Purchasing an item

* Once you have launched the bamazonCustomer.js folder from your terminal you will have be presented with a table that displays all items available for sale, followed by 2 questions. 
    * One will promt you to select the item you wish to purchse. 
    * The next will prompt you for the amount you want to buy 

### Step 3: Magic

* After you place your order you will get a nice receipt or if the items are running low, a prompt to update your quantity. 
    * All orders will imediatly update the stock quantity available in the mySQL data base.

    *ENJOY!!*