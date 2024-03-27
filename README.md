# Pioneer

This project is a Node.js backend application that handles user authentication with JWT, retrieves data from a third-party API based on a provided category, and implements secure API endpoints accessible only to authenticated users.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sauravs4h/Pioneer.git
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Install dependencies:

```bash
npm install
```

## Endpoints

### User Authentication

- `POST http://localhost:8080/user/signup`: Create a new user account.
- `POST http://localhost:8080/user/login`: Log in with existing credentials to obtain JWT token.
- `POST http://localhost:8080/user/logout`: Log out and invalidate JWT token.

### Third-party API Integration

- `GET http://localhost:8080/task2/task2GetData?Category=Animal`: Retrieve data from the third-party API based on the provided category.

### Secure API Endpoint

- `GET http://localhost:8080/task4/task4securedApi`: Accessible only to authenticated users. Returns secure data.

## Deployment

https://pioneer-pvri.onrender.com/

## Demo
https://drive.google.com/file/d/1glYgiaxoXCJkpkEKS7bgF_KYAqEoXL7G/view?usp=sharing