# FizzBuzz

A Typescript application to print 'fizz' if a given number is divisible by 3, 'buzz' if is divisible by 5 and 'fizzbuzz' if is divisible by 3 and 5.

## Installation

### Requirements

- Node (recommended version v14 and up).

To install this app first you have to clone it to a local folder.

```
git clone https://github.com/antonioortizdev/fizzbuzz.git
```

Then you will need to install all Node packages.

```
npm i -D
```

## Usage

```
npm start [until_number]
```

This will print all the numbers until the argument ```until_number```, or until 100 if not specified or ```until_number``` is not a number.

## Testing

```
npm t
```

This will execute a stack of unitary tests.

### With Docker
Build and start container with
```
docker-compose up -d
```

Then you will be able to execute commands like:
```
docker-compose exec nodejs npm start [until_number]
docker-compose exec nodejs npm test
```


