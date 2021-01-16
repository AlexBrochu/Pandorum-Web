db.createUser({
  user: "Username",
  pwd: "pwd",
  roles: [
    {
      role: "readWrite",
      db: "dragon-run-website",
    },
  ],
});
