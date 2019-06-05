### Smooth.legal - Create a Delaware LLC in 5 minutes

Smooth Legal is a web app where a person can make a Delaware LLC in 5 minutes.

## 1. Contributing

There are two standard ways to do collobarative development with git. Fork-pull request-merge and Branch-pull request-merge. We prefer Branch-pull request-merge. This is often better for smaller teams that all have write access to the repo since it's simpler to keep the code in sync, versus having a large number of forks.

More in-depth overviews:

- https://guides.github.com/introduction/flow/
- https://gist.github.com/blackfalcon/8428401

### Pull Request Workflow:

1. Pull the master branch

```
$ git pull origin master
```

2. Create a new branch for your new feature

```
$ git checkout -b your-branch-name
```

3. Commit and push your new branch to Github

```
$ git add . 

$ git commit -m 'Message referencing Jira ticket'

$ git push origin your-branch-name
```
4. Create a pull request for your branch at Github
5. Someone will approve/reject your pull request and merge your code
6. Delete your branch

### Rebase workflow

Occasionally you will be working on your branch while the `master` branch is being actively developed by others thus making your branch fall behind and potentially create merge conflicts later. To solve this, you can rebase your branch to the latest version of master:

```
$ git checkout master

$ git pull origin master

$ git checkout your-branch-name

$ git rebase master 
```

## 2. About the App


### Steps user needs to do:

- Go to landing page 
- Enter details about the LLC
- Enter details about the members 
- Enter payment information
- Pay 
- Receive confirmation email (the actual docs get shipped in the mail)

### Technologies: 

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
