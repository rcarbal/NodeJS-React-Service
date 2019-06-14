### Smooth.legal - Create a Delaware LLC in 5 minutes
### Smooth Legal is a web app where a person can make a Delaware LLC in 5 minutes.

# Smooth Legal server
This is a node.js express Restful server hosted by Heroku. It accepts form data, saves the data to a mongo database.  Sends a email, responds with successful process. Currently the live server is for testing its functionality.

## Testing Heroku Functionality
* To prevent email from going to spam, set ricardo.a.carballo@gmail.com as a contact.
* Use the form found at url [https://evening-tor-34547.herokuapp.com/api/v1/test] to send email data.
* If successful, the server response will echo the form data.
* HTTP POST api endpoint is [https://evening-tor-34547.herokuapp.com/api/v1/test].

## Testing Email Functionality
* Clone the server repository.
* Run `npm install`.
* Under /test directory add a .env file with the variable SENDGRID_KEY=[SendGrid_key].
* Run testSendGrid.js by using `node testSendgrid.js` within the /test directory.

## Testing MongoDB Functionality
* Complete the first two steps of the Testing Email Functionality section.
* Run testDatabase.js by using `node testDatabase.js` within the /test directory.
