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
