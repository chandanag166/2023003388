const axios = require("axios");
const Log = require("../logging-middleware/logger");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjZ3VudHVtYUBnaXRhbS5pbiIsImV4cCI6MTc4MDgxMjAzMSwiaWF0IjoxNzgwODExMTMxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMjliZWUzYzYtZGMyNy00YTdmLTljNmItOWEwNGJkMjhhYzQxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZ3VudHVtYWR1Z3UgY2hhbmRhbmEiLCJzdWIiOiJlODE5YTM2Ni1lYzE2LTRmNGYtOWQyMS1lNzBmMWUyMzAxNDMifSwiZW1haWwiOiJjZ3VudHVtYUBnaXRhbS5pbiIsIm5hbWUiOiJndW50dW1hZHVndSBjaGFuZGFuYSIsInJvbGxObyI6IjIwMjMwMDMzODgiLCJhY2Nlc3NDb2RlIjoid2dLdGdaIiwiY2xpZW50SUQiOiJlODE5YTM2Ni1lYzE2LTRmNGYtOWQyMS1lNzBmMWUyMzAxNDMiLCJjbGllbnRTZWNyZXQiOiJUcXRZRURLdXhOamZ2cUZWIn0.gLB2sRd8Jdlki29QIZIMz4qJ4OZrtHkpc5rcbd95k60";

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function fetchNotifications() {
  try {

    await Log(
      "backend",
      "info",
      "service",
      "Fetching notifications from API"
    );

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    const notifications = response.data.notifications;

    const top10 = notifications
      .sort((a, b) => {

        if (priority[b.Type] !== priority[a.Type]) {
          return priority[b.Type] - priority[a.Type];
        }

        return new Date(b.Timestamp) - new Date(a.Timestamp);

      })
      .slice(0, 10);

    await Log(
      "backend",
      "info",
      "service",
      "Top 10 notifications generated successfully"
    );

    console.log("\nTOP 10 PRIORITY NOTIFICATIONS\n");
    console.table(top10);

  } catch (error) {

    await Log(
      "backend",
      "error",
      "handler",
      error.message
    );

    console.error(error.message);
  }
}

fetchNotifications();