const cron = require("node-cron");
const db = require("./config/db");

cron.schedule("* * * * *", async () => {
  try {
    await db.query(`
      UPDATE actions
      SET status = 'done'
      WHERE status = 'pending' AND NOW() >= DATE_ADD(start_time, INTERVAL duration SECOND)
    `);
    console.log("Cron: actions updated");
  } catch (err) {
    console.error("Cron error:", err);
  }
});
