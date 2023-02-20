# Azure Active Direction - Authentication Guide
This doc describes how to create a AAD registration so that your web app can authenticate users, obtain account information and obtain data from various services within your Azure tenant.

# How to add authentication to your app

## 1. Create an AAD app registration
Follow this guide to create an app registration: https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-javascript-spa#register-the-application

## 2. Obtain the client ID
Copy the Application (client) ID from the app registration page for the newly created app. 

Alternative, you can look for an existing AAD app client IDs by navigating to https://portal.azure.com > portal menu aka hamburger menu (top left) > Azure Active Directory > Search

## 3. Obtain the tenant ID
This is displayed on the overview page of the Azure Active Directory service in https://portal.azure.com

## 3. Paste client ID in to AuthExample.jsx
Find the lines that read:
```javascript
const aadAppId = "";
const tenantId = "";
```
And paste the values obtained from the previous steps. You can now login to your AAD application via the example scene.