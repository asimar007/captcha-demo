# CAPTCHA Express Application

A simple Express.js application demonstrating Google reCAPTCHA v2 integration for form validation.

## Features

- Express.js server implementation
- Google reCAPTCHA v2 ("I'm not a robot" checkbox) integration
- Simple HTML form with client-side CAPTCHA verification
- Server-side CAPTCHA validation endpoint
- Clear error handling and status feedback

## Installation

1.  Clone the repository:

```
git clone https://github.com/asimar007/captcha-demo
cd captcha-demo
```

2.  Install dependencies:

```
npm install
```

## Configuration

1.  **Obtain reCAPTCHA Keys**:

    - Visit the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
    - Create a new site with these settings:

      - reCAPTCHA type: v2 "I'm not a robot" Checkbox
      - Domains: Add `localhost` (for development) and your production domain

    - Copy the generated Site Key and Secret Key

## Running the Application

1.  Start the development server:

```
npm index.js
```

## API Endpoints

- `POST /validate-captcha` - Validate reCAPTCHA response

  - Required parameter: `g-recaptcha-response`
  - Returns JSON:

    ```
    {
      "success": boolean,
      "message": "Validation result message"
    }
    ```

## Troubleshooting

Common issues and solutions:

1.  **CAPTCHA not showing**:

    - Verify the Site Key is correctly set in index.html
    - Ensure your domain is whitelisted in Google reCAPTCHA settings

2.  **Validation failures**:

    - Check the Secret Key in index.js matches your reCAPTCHA configuration
    - Verify network connectivity to Google's servers

3.  **Localhost issues**:

    - Add `127.0.0.1` and `localhost` to allowed domains in reCAPTCHA settings
