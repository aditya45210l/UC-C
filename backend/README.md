# User Registration API

This document provides details on the user registration API endpoint.

## Register a New User

Registers a new user in the system.

- **URL:** `/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Request Body

| Field | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| `email` | `String` | The user's email address. | Yes |
| `password`| `String` | The user's password (min 3 characters).| Yes |
| `fullName`| `Object` | The user's full name. | Yes |
| `fullName.firstName`| `String`| The user's first name (min 3 characters).| Yes |
| `fullName.lastName` | `String`| The user's last name. | No |

**Example Request:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

### Success Response

- **Code:** `201 Created`
- **Content:** The newly created user object.

**Example Response:**

```json
{
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "60d0fe4f5311236168a109ca",
    "__v": 0
  }
}
```

### Error Responses

- **Code:** `400 Bad Request`

  **Reason:** Validation error (e.g., missing fields, invalid email).

  **Example Response:**

  ```json
  {
    "error": true,
    "message": [
      {
        "type": "field",
        "value": "",
        "msg": "Email address is required",
        "path": "email",
        "location": "body"
      }
    ]
  }
  ```

- **Code:** `400 Bad Request`

  **Reason:** User with the provided email already exists.

  **Example Response:**

  ```json
  {
    "error": true,
    "message": "User allready exist!"
  }
  ```
