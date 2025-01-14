# API Documentation

## User Registration
Endpoint for registering new users in the system.

### Endpoint
```
POST /users/register
http://localhost:8001/users/register
```

### Description
Creates a new user account with the provided information. Passwords are automatically hashed before storage.

### Request Body
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}
```

### Required Fields
- `fullname.firstname`: User's first name (minimum 3 characters)
- `fullname.lastname`: User's last name
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Response Codes
- `201`: User successfully created
- `400`: Invalid request body or validation error
- `409`: Email already exists
- `500`: Server error

### Example Response
```json
{
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "password": "string",
        "socketId": "",
        "_id": "string",
        "date": "string",
        "__v": 0
    },
    "token": "string"
}
```

### Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid email address",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Firstname must be at least 3 characters",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters",
            "param": "password",
            "location": "body"
        }
    ]
}
```

## Captain Registration
Endpoint for registering new captains in the system.

### Endpoint
```
POST /captains/register
http://localhost:8001/captains/register
```

### Description
Creates a new captain account with the provided information. Passwords are automatically hashed before storage.

### Request Body
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": 1,
        "vechiletype": "string"
    }
}
```

### Required Fields
- `fullname.firstname`: Captain's first name (minimum 3 characters)
- `email`: Valid email address
- `password`: Password (minimum 6 characters)
- `vehicle.color`: Vehicle color (minimum 3 characters)
- `vehicle.plate`: Vehicle plate (minimum 3 characters)
- `vehicle.capacity`: Vehicle capacity (minimum 1)
- `vehicle.vechiletype`: Vehicle type (must be one of 'Car', 'Motorcycle', 'Auto')

### Response Codes
- `201`: Captain successfully created
- `400`: Invalid request body or validation error
- `409`: Email already exists
- `500`: Server error

### Example Response
```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": 1,
            "vechiletype": "string"
        },
        "socketId": "",
        "_id": "string",
        "date": "string",
        "__v": 0
    },
    "token": "string"
}
```

### Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid email address",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Firstname must be at least 3 characters",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Vehicle color is required",
            "param": "vehicle.color",
            "location": "body"
        },
        {
            "msg": "Vehicle plate is required",
            "param": "vehicle.plate",
            "location": "body"
        },
        {
            "msg": "Capacity should be at least 1",
            "param": "vehicle.capacity",
            "location": "body"
        },
        {
            "msg": "Vehicle type is required",
            "param": "vehicle.vechiletype",
            "location": "body"
        }
    ]
}
```

## Captain Login

### Endpoint
```
POST /captains/login
http://localhost:8001/captains/login
```

### Description
Logs in a captain with the provided email and password.

### Request Body
```json
{
    "email": "string",
    "password": "string"
}
```

### Required Fields
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Response Codes
- `200`: Captain successfully logged in
- `400`: Invalid request body or validation error
- `401`: Invalid email or password
- `500`: Server error

### Example Response
```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": 1,
            "vechiletype": "string"
        },
        "socketId": "",
        "_id": "string",
        "date": "string",
        "__v": 0
    },
    "token": "string"
}
```

### Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid email address",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters",
            "param": "password",
            "location": "body"
        }
    ]
}
```

## Get Captain Profile
Endpoint for retrieving the logged-in captain's profile.

### Endpoint
```
GET /captains/profile
http://localhost:8001/captains/profile
```

### Description
Retrieves the profile information of the currently authenticated captain.

### Headers
- `Authorization`: Bearer token (if not using cookies)

### Response Codes
- `200`: Captain profile successfully retrieved
- `401`: Unauthorized (invalid or missing token)
- `500`: Server error

### Example Response
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": 1,
        "vechiletype": "string"
    },
    "socketId": "",
    "_id": "string",
    "date": "string",
    "__v": 0
}
```

## Captain Logout
Endpoint for logging out the captain.

### Endpoint
```
GET /captains/logout
http://localhost:8001/captains/logout
```

### Description
Logs out the currently authenticated captain by clearing the authentication token and blacklisting it.

### Headers
- `Authorization`: Bearer token (if not using cookies)

### Response Codes
- `200`: Captain successfully logged out
- `401`: Unauthorized (invalid or missing token)
- `500`: Server error

### Example Response
```json
{
    "message": "Logged out successfully"
}
```

## User Login
Endpoint for logging in users.

### Endpoint
```
POST /users/login
http://localhost:8001/users/login
```

### Description
Logs in a user with the provided email and password.

### Request Body
```json
{
    "email": "string",
    "password": "string"
}
```

### Required Fields
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Response Codes
- `200`: User successfully logged in
- `400`: Invalid request body or validation error
- `401`: Invalid email or password
- `500`: Server error

### Example Response
```json
{
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "password": "string",
        "socketId": "",
        "_id": "string",
        "date": "string",
        "__v": 0
    },
    "token": "string"
}
```

### Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid email address",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters",
            "param": "password",
            "location": "body"
        }
    ]
}
```

## Get User Profile
Endpoint for retrieving the logged-in user's profile.

### Endpoint
```
GET /users/profile
http://localhost:8001/users/profile
```

### Description
Retrieves the profile information of the currently authenticated user.

### Headers
- `Authorization`: Bearer token (if not using cookies)

### Response Codes
- `200`: User profile successfully retrieved
- `401`: Unauthorized (invalid or missing token)
- `500`: Server error

### Example Response
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "socketId": "",
    "_id": "string",
    "date": "string",
    "__v": 0
}
```

## User Logout
Endpoint for logging out the user.

### Endpoint
```
GET /users/logout
http://localhost:8001/users/logout
```

### Description
Logs out the currently authenticated user by clearing the authentication token and blacklisting it.

### Headers
- `Authorization`: Bearer token (if not using cookies)

### Response Codes
- `200`: User successfully logged out
- `401`: Unauthorized (invalid or missing token)
- `500`: Server error

### Example Response
```json
{
    "message": "Logged out successfully"
}
```

## Ride Routes

### Create Ride
```
POST /rides/create
http://localhost:8001/rides/create
```
Creates a new ride.

#### Request Body
```json
{
    "pickup": "string",
    "destination": "string",
    "vehicleType": "string"
}
```
- `pickup`: Pickup address (minimum 3 characters)
- `destination`: Destination address (minimum 3 characters)
- `vehicleType`: Vehicle type (must be one of 'auto', 'car', 'moto')

#### Response Codes
- `201`: Ride successfully created
- `400`: Invalid request body or validation error
- `500`: Server error

### Get Fare
```
GET /rides/get-fare
http://localhost:8001/rides/get-fare
```
Gets the fare for a ride.

#### Query Parameters
- `pickup`: Pickup address (minimum 3 characters)
- `destination`: Destination address (minimum 3 characters)

#### Response Codes
- `200`: Fare successfully retrieved
- `400`: Invalid query parameters or validation error
- `500`: Server error

### Confirm Ride
```
POST /rides/confirm
http://localhost:8001/rides/confirm
```
Confirms a ride.

#### Request Body
```json
{
    "rideId": "string"
}
```
- `rideId`: Ride ID (must be a valid MongoDB ObjectId)

#### Response Codes
- `200`: Ride successfully confirmed
- `400`: Invalid request body or validation error
- `500`: Server error

### Start Ride
```
GET /rides/start-ride
http://localhost:8001/rides/start-ride
```
Starts a ride.

#### Query Parameters
- `rideId`: Ride ID (must be a valid MongoDB ObjectId)
- `otp`: OTP (must be 6 characters)

#### Response Codes
- `200`: Ride successfully started
- `400`: Invalid query parameters or validation error
- `500`: Server error

### End Ride
```
POST /rides/end-ride
http://localhost:8001/rides/end-ride
```
Ends a ride.

#### Request Body
```json
{
    "rideId": "string"
}
```
- `rideId`: Ride ID (must be a valid MongoDB ObjectId)

#### Response Codes
- `200`: Ride successfully ended
- `400`: Invalid request body or validation error
- `500`: Server error

## Maps Routes

### Get Coordinates
```
GET /maps/get-coordinates
http://localhost:8001/maps/get-coordinates
```
Gets the coordinates for an address.

#### Query Parameters
- `address`: Address (minimum 3 characters)

#### Response Codes
- `200`: Coordinates successfully retrieved
- `400`: Invalid query parameters or validation error
- `500`: Server error

### Get Distance and Time
```
GET /maps/get-distance-time
http://localhost:8001/maps/get-distance-time
```
Gets the distance and time between two locations.

#### Query Parameters
- `origin`: Origin address (minimum 3 characters)
- `destination`: Destination address (minimum 3 characters)

#### Response Codes
- `200`: Distance and time successfully retrieved
- `400`: Invalid query parameters or validation error
- `500`: Server error

### Get AutoComplete Suggestions
```
GET /maps/get-suggestions
http://localhost:8001/maps/get-suggestions
```
Gets autocomplete suggestions for an input.

#### Query Parameters
- `input`: Input string (minimum 3 characters)

#### Response Codes
- `200`: Suggestions successfully retrieved
- `400`: Invalid query parameters or validation error
- `500`: Server error
