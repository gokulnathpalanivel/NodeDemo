# NodeDemo

How to run application?
-----------------------
1. git clone --> git@github.com:gokulnathpalanivel/NodeDemo.git
2. Start mongoDB server (added sample commands run in my machine)
    set mongodb/bin in PATH variable
      Terminal Command: LM-MC-001:~ gpalanivel$ export PATH=$PATH:/usr/local/mongodb/bin

    specify db path while starting MongoDB (Make sure data folder is created before running apllication)
      // Sample command with my local MongoDB data source path
      Terminal Command: LM-MC-001:~ gpalanivel$ mongod --dbpath /Users/gpalanivel/Documents/data/mongo_db_data
      
3. cd demo_webapp
    Terminal Command: LM-MC-001:~ gpalanivel$ cd Downloads/NodeDemo/demo_webapp/
4. Install node modules
    Terminal Command: LM-MC-001:~ gpalanivel$ npm install
5. Start server: DEBUG=demo_webapp:* npm start
    Terminal Command: LM-MC-001:~ gpalanivel$ DEBUG=demo_webapp:* npm start
6. Hit http://localhost:3000/home in your browser.. That's it!!!!

Output:
-------
  Reference screenshots are attached with this repo: refer png file names start with output_*.png
