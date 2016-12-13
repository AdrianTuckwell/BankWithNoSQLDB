Mongo Bank---------------------------------------------------------
Basic bank JavaScript application that saves data to mongo database. New accounts can be added via the browser and updated to the screen and added to the data base
-------------------------------------------------------------------
Time to build: ???
Current state: Working
Enhancements required:  
- remove accounts

To get this running...

1. need 4 terminals running
    Terminal 1. - NPM
    > cd BucketList...
    > npm install express --save
    > npm init
    > npm start

    Terminal 2. - WEB PACK
    > cd BucketList/Client
    > npm install
    > npm install body parser --save
    > webpack -w

    Terminal 3. - MONGO server
    > cd BucketList
    > npm install mongodb --save
    > mongod

    Terminal 4. - MONGO terminal
    > cd BucketList
    > mongo (for the mongo > prompt)
---------------------------------------------------------------------