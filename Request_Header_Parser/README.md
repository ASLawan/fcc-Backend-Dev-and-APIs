# Request Header Parser Microservice

This project is a simple API microservice that parses HTTP request headers to extract and return information about the client’s IP address, preferred languages, and software details (like the OS and browser). This API is functionally similar to the Request Header Parser Microservice project on FreeCodeCamp.

## Project Features

- **IP Address Detection**: Captures the client’s IP address.
- **Preferred Language Parsing**: Retrieves the client’s language preferences from the `Accept-Language` header.
- **Software Details Extraction**: Provides client software details (e.g., OS, browser) from the `User-Agent` header.

## API Endpoint

The microservice includes a single API endpoint:

### GET `/api/whoami`

This endpoint responds with a JSON object containing:

- `ipaddress`: IP address of the client
- `language`: Preferred language(s) of the client
- `software`: Details of the client software (OS, browser, etc.)

#### Sample Request

```bash
GET http://localhost:5000/api/whoami

```

#### Sample Request

```bash
{
  "ipaddress": "123.45.67.89",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
}
```

#### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/request-header-parser.git
cd request-header-parser
```

### Install dependencies:

```bash

npm install
Run the server:
```

```bash
node server.js
Access the API: Open your browser or a tool like Postman and navigate to http://localhost:5000/api/whoami to see the parsed header information.
```

### Code Structure

request-header-parser/
├── server.js # Main server file
├── package.json # Project metadata and dependencies
└── routes/
└── api.js # API route definition for /api/whoami

### server.js

The entry point that sets up and runs the Express server, using the routes/api.js file for routing.

### routes/api.js

Defines the /api/whoami endpoint, which parses the headers and returns the client’s IP address, language, and software information.

### Error Handling

The API is designed to handle errors gracefully. If required headers are missing or cannot be parsed, it returns a 400 Bad Request error with a descriptive message.

### Deployment

To make this microservice publicly accessible, deploy it to a cloud provider like Heroku, Vercel, or Railway. Here’s how to deploy to Heroku:

Login to Heroku:

```bash

heroku login
Create a new Heroku app:
```

```bash
heroku create request-header-parser-app
Push the code to Heroku:
```

```bash
git add .
git commit -m "Deploying Request Header Parser Microservice"
git push heroku main
Access your live API: Heroku provides a URL for the app, like https://request-header-parser-app.herokuapp.com/api/whoami.
```

### License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to fork this project, suggest improvements, or contribute by submitting pull requests. Enjoy building with the Request Header Parser Microservice!
