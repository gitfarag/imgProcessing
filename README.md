# imgProcessing

github repo https://github.com/gitfarag/imgProcessing.git


A quick tutorial to crop image and save it

## Used Technologies:

- [Nodejs]
- [Express]
- [TypeScript]
- [Sharp]
- [Jasmine]
- [supertest]
- [Helmet]
- [cors]
- [dotenv]
- [check-package.json-to-know-more]
## Instructions

### Install

```
npm install
```

###  {Build & Start}

```
npm start
```

### Development {nodemon}

```
npm run dev
```

### Test using jasmine

```
npm run test
```


### end Point to download the image

```
/api-rest/images/image1.jpg
```
### end Point to crop the image


```
/api-rest/images/scale/imgName.jpg?w=100&h=100
```
## important
```````
always remeber to write the image extention ex:(jpg)
follwed by the query parameter w & h
```````
```````
value of w wil be the width
value of h will be the height
