# ☀️ Jul 14, 2023

## Basics 

List the Active Account Name
```
gcloud auth list
```

List the Project ID
```
gcloud config list project
```


Set the region for the project
```
gcloud config set compute/region us-west1
```

## App Engine
App Engine is a fully managed, serverless platform for developing and hosting web applications at scale

To deploy your app to App Engine, run the following command from within the root directory of your application where the app.yaml file is located

```
gcloud app deploy
```

To View the Deployment

```
gcloud app browse
```