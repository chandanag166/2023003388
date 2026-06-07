const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjZ3VudHVtYUBnaXRhbS5pbiIsImV4cCI6MTc4MDgxNzUyOCwiaWF0IjoxNzgwODE2NjI4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNmE3YzEwZTUtNjhjOS00NWIxLWI2MGMtNWQxNGEwNTE4MmJkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZ3VudHVtYWR1Z3UgY2hhbmRhbmEiLCJzdWIiOiJlODE5YTM2Ni1lYzE2LTRmNGYtOWQyMS1lNzBmMWUyMzAxNDMifSwiZW1haWwiOiJjZ3VudHVtYUBnaXRhbS5pbiIsIm5hbWUiOiJndW50dW1hZHVndSBjaGFuZGFuYSIsInJvbGxObyI6IjIwMjMwMDMzODgiLCJhY2Nlc3NDb2RlIjoid2dLdGdaIiwiY2xpZW50SUQiOiJlODE5YTM2Ni1lYzE2LTRmNGYtOWQyMS1lNzBmMWUyMzAxNDMiLCJjbGllbnRTZWNyZXQiOiJUcXRZRURLdXhOamZ2cUZWIn0.owciedd0hPem6WjMPD2hIbZ_Xm8GHRMEpsBYoAqy6HI";

app.get("/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log("Notifications fetched successfully");

    res.json(response.data);
  } catch (error) {
    console.log("========== SERVER ERROR ==========");
    console.log("Message:", error.message);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});