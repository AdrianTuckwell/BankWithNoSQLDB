BucketList---------------------------------------------------------
List of countries pulled from the API http://localhost:3000/bucketlist
Each country as a button that when clicked will add the index of the country to mongo database Countries, bucketlist...
-------------------------------------------------------------------
Time to build: 1.5 hrs
Current state: very limited
Enhancements required:  
- add country to database
- read from database
- have boolean state for country so button can be switched on/off should user change mind

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