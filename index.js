const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Your reCAPTCHA secret key (get this from Google)
const SECRET_KEY = 'YOUR_GOOGLE_RECAPTCHA_SECRET_KEY';

// Use body-parser to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file for CAPTCHA
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle CAPTCHA form submission
app.post('/submit', async (req, res) => {
    const { captchaResponse } = req.body;
    // console.log(captchaResponse);

    try {
        const googleResponse = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            null,
            {
                params: {
                    secret: SECRET_KEY,
                    response: captchaResponse
                }
            }
        );

        if (googleResponse.data.success) {
            res.send('CAPTCHA verified successfully! You are human.');
        } else {
            res.send('CAPTCHA verification failed. Please try again.');
        }
    } catch (error) {
        res.status(500).send('Error verifying CAPTCHA');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
