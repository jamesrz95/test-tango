# Test-tango

This project consists of the calculation of a given Nth index of the Fibonacci serious and returns the result. 



There are two ways you can input the Nth number:

1- From the Fibonacci app. 



![Screen Shot 2022-03-25 at 7 48 12](https://user-images.githubusercontent.com/18705623/160133807-2969cd81-3cea-4fd4-8100-cd924981a015.png)

2- From the Fibonacci api.

![Screen Shot 2022-03-25 at 7 58 26](https://user-images.githubusercontent.com/18705623/160135024-441e5f5d-89e1-407f-b50d-146aaf11613d.png)
![Screen Shot 2022-03-25 at 7 58 59](https://user-images.githubusercontent.com/18705623/160135034-9196278b-906b-4b8e-8922-6c417f0df9ea.png)

## Installation

Download zip file or make or you can clone the project.
```bash
git clone https://github.com/jamesrz95/test-tango.git

```
This project was made with VS Code.

You can open a new terminal in your VS Code and for each folder, you will need to install the dependencies

!!Note, you need nvm v16 or above to run code so make changes if needed.
```bash
  nvm use v16
```

Install  dependencies for React application

```bash
  cd fibbonacci-app
  npm install
```

Install  dependencies for Nest API

```bash
  cd fibonacci-api
  npm install
```

Then you have to start your API so, change your directory to the fibonacci-api and in your terminal
type


```bash
  npm run start:dev
```

Then make a new terminal and start your React app
```bash
  npm start
```

## Documentation

For making an input to the REST API you will type in the browser

```bash
    http://localhost:3333/api/fibonacci/{Inputnumber}
```

And then, you will need to reload the React App to see the input and result from API.
