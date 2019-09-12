# email-app
Full stack email app

Directions to run the full stack email app:

Prerequisites:

1. Install MongoDB: Directions for Mac: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/. Hint: Add /usr/local/mongodb/bin to $Path using these directions: https://www.architectryan.com/2012/10/02/. Restart the terminal. Run an instance: mongod --config /usr/local/etc/mongod.conf.
2. Install Postman: Directions: https://www.getpostman.com/downloads/.
3. Install Node.js (this also installs npm): https://nodejs.org/en/.

Steps to run the full stack email app:

1. On GitHub, download zip and save the unzipped project folder called email-app-master locally: https://github.com/stephenba4/email-app.
2. Using the terminal cd into email-app-master.
3. Connect to the database using this command in the terminal: mongo.
4. Start the server by opening an additional terminal tab and using this command: npm run start.
5. Open the index.html file in a browser window. 
6. Enter your name and email, then click Submit. This sends the information you entered to the Node.js RESTful Api and creates a record using your data in the MondoDB database instance.
7. To see the response in Postman: Change method to Post. Enter request URL: http://localhost:3000/email. Click Body and select “x-www-formurlencoded". Enter Keys: email and name. Enter Values: test@email.com and Joe Smith. Click Send. The response is a JSON object showing the generated id, your email and your name.
