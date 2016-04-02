# NodeDemo

How to run application?
-----------------------
1. git clone --> git@github.com:gokulnathpalanivel/NodeDemo.git 
2. Open a terminal  
3. Start mongoDB server (added sample commands run in my machine)    
    a. set mongodb/bin in PATH variable  
      Terminal Command: LM-MC-001:~ gpalanivel$ export PATH=$PATH:/usr/local/mongodb/bin  
    b. specify db path while starting MongoDB (Make sure data folder is created before running apllication)  
      // Sample command with my local MongoDB data source path  
      Terminal Command: LM-MC-001:~ gpalanivel$ mongod --dbpath /Users/gpalanivel/Documents/data/mongo_db_data  
4. Don't close this terminal - Mongo Server will continue running
5. Open new terminal
6. cd demo_webapp  
    Terminal Command: LM-MC-001:~ gpalanivel$ cd Downloads/NodeDemo/demo_webapp/  
7. Install node modules  
    Terminal Command: LM-MC-001:~ gpalanivel$ npm install  
8. Start server: DEBUG=demo_webapp:* npm start  
    Terminal Command: LM-MC-001:~ gpalanivel$ DEBUG=demo_webapp:* npm start  
9. Hit http://localhost:3000/home in your browser.. That's it!!!!  

Output:
-------
  Reference screenshots are attached with this repo: refer png file names start with output_*.png  
