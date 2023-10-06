module.exports = {
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "start",
      cwd: "/root/live.framework/news-next", // Replace with the actual path to your Next.js app
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
