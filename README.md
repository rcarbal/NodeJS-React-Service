# smoothlegal

Smooth.legal - Create a Delaware LLC in 5 minutes

Smooth Legal is a web app where a person can make a Delaware LLC in 5 minutes. 

Steps user needs to do:

- Go to landing page 
- Enter details about the LLC
- Enter details about the members 
- Enter payment information
- Pay 
- Receive confirmation email (the actual docs get shipped in the mail)

Technologies: 

- API - Node/Express 
- Frontend - React.js
- Frontend off the shelf elements - Element UI (https://element.eleme.io/#/en-US)
- Emails - Sendgrid 
- Payment - Stripe.js 

We are going to clone the functionality of another website:

https://secure.incnow.com/order/default.aspx?type=new&entity=llc

Differences for ours:

- Our app is only “LLC” and only “Delaware” 
- We will only accept card payments
- We will only have one version: the “Now Formation” 
- We will include these two features automatically which Inc now makes optional.
- Statement of Organizer
- Tax ID Number - EIN Application

A lot of the elements to do this will be in Element UI so you don’t have to build these from scratch.
