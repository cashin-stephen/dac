# DAC Website - Contact Form Setup

## Quick Start

### 1. Install Backend Dependencies
```bash
cd /Users/stephen.cashin/dac
npm install
```

### 2. Configure SendGrid API Key

Edit the `.env` file and replace `YOUR_SENDGRID_API_KEY_HERE` with your actual SendGrid API key:

```bash
SENDGRID_API_KEY=SG.your_actual_key_here
```

**To get your SendGrid API key:**
1. Log in to https://app.sendgrid.com/
2. Go to Settings → API Keys
3. Click "Create API Key"
4. Name it (e.g., "DAC Website Contact Form")
5. Select "Restricted Access" and enable "Mail Send" permission
6. Click "Create & View"
7. Copy the key (starts with "SG.") and paste it in the `.env` file

**Important:** Verify your sender email (`cashinstephen@gmail.com`) in SendGrid:
- Go to https://app.sendgrid.com/settings/sender_auth
- Follow the sender verification process

### 3. Start the Backend Server
```bash
npm start
```

The server will run on http://localhost:8000

### 4. Start the Frontend (in a separate terminal)
```bash
cd frontend
npm start
```

The website will open at http://localhost:3000

### 5. Test the Contact Form
1. Navigate to the Contact section
2. Fill out the form
3. Complete the reCAPTCHA
4. Click Submit
5. You should see "Message successfully sent!"

## File Locations

- **Backend server**: `/Users/stephen.cashin/dac/index.js`
- **Backend config**: `/Users/stephen.cashin/dac/.env` ← **PUT YOUR SENDGRID KEY HERE**
- **Frontend config**: `/Users/stephen.cashin/dac/frontend/src/.env`
- **Contact component**: `/Users/stephen.cashin/dac/frontend/src/Components/Contact.js`

## Troubleshooting

**"Email service not configured" error:**
- Make sure `SENDGRID_API_KEY` is set in `/Users/stephen.cashin/dac/.env`

**"Captcha verification failed":**
- Check that the backend server is running on port 8000
- Verify the reCAPTCHA keys in `/Users/stephen.cashin/dac/frontend/src/.env`

**Email not sending:**
- Verify sender email in SendGrid dashboard
- Check backend console for detailed error messages
