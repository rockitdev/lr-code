# Code Test

To begin, checkout a local copy of the code base
```
git clone https://github.com/rockitdev/lr-code.git
```

Start the docker images
```
docker-compose up -d
```

Install the composer dependencies on first run for Laravel app
```
docker exec lr_api composer install
```

React app runs a development server on port 3001
```
http://127.0.0.1:3001
```

Laravel API Resource
```
http://127.0.0.1/api/persons
```

On successful submission, customers.txt can be found in:
```
./API/src/storage/app
```