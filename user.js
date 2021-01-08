db.createUser({
  user: "DBUSERADMIN",
  pwd: "OJNEBSFTVCE",
  roles: [{ role: "userAdmin", db: "recycle" }]
});

db.createUser({
  user: "DBSYSTEMADMIN",
  pwd: "OJNEBNFUTZTCE",
  roles: [{ role: "dbAdmin", db: "recycle" }]
});

db.createUser({
  user: "KOAAPIUSER",
  pwd: "SFTVJQBBPL",
  roles: [{ role: "readWrite", db: "recycle" }]
});
