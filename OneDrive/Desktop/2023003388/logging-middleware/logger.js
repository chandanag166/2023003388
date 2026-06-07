const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjZ3VudHVtYUBnaXRhbS5pbiIsImV4cCI6MTc4MDgxMDUyMiwiaWF0IjoxNzgwODA5NjIyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYmJlMjQyMWEtMGE4Ny00MTM0LTk1N2YtYjlhMGJhMzRhNDhkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZ3VudHVtYWR1Z3UgY2hhbmRhbmEiLCJzdWIiOiJlODE5YTM2Ni1lYzE2LTRmNGYtOWQyMS1lNzBmMWUyMzAxNDMifSwiZW1haWwiOiJjZ3VudHVtYUBnaXRhbS5pbiIsIm5hbWUiOiJndW50dW1hZHVndSBjaGFuZGFuYSIsInJvbGxObyI6IjIwMjMwMDMzODgiLCJhY2Nlc3NDb2RlIjoid2dLdGdaIiwiY2xpZW50SUQiOiJlODE5YTM2Ni1lYzE2LTRmNGYtOWQyMS1lNzBmMWUyMzAxNDMiLCJjbGllbnRTZWNyZXQiOiJUcXRZRURLdXhOamZ2cUZWIn0.HSKQ7mp4vyEABstWNuhIbgmqzfhQc1LIUxQqJSTwg_w";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

module.exports = Log;