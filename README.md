
```markdown
# User Registration and Authentication API

An API for managing user registration and authentication.

## API Documentation

### Register a New User

**Endpoint:** `POST /user/register`

**Description:** Register a new user with the provided information.

**Request Body:**
- `email` (string): User's email.
- `gender` (string): User's gender.
- `password` (string): User's password.
- `userName` (string): User's username.
- `lastName` (string): User's last name.
- `firstName` (string): User's first name.

**Example Request:**
```json
{
  "email": "example@email.com",
  "gender": "male",
  "password": "securepassword",
  "userName": "example_user",
  "lastName": "Doe",
  "firstName": "John"
}
```

**Success Response:**
```json
{
  "message": "Done and check your inbox to confirm your email",
  "result": {
    "_id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "userName": "example_user",
    "email": "example@email.com",
    "gender": "male",
    "status": "offline",
    "role": "user",
    "isconfrimed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

**Error Response:**
- **Status Code:** 400 Bad Request
- **Response Body:**
```json
{
  "error": "email is already exist"
}
```

- **Status Code:** 500 Internal Server Error
- **Response Body:**
```json
{
  "error": "invalid-signUP"
}
```

**Notes:**
- The server will send a confirmation email to the user's provided email address.
- Confirm the email by clicking on the link sent to the user's inbox.
```
