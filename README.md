# Find similar papers

This repository contains a series of methodology to find similar paper.


## What's methodology?

- Find similar papers by references;
- Find similar papers by authors;
- Find similar papers by same magazine;
- Find similar papers by keywords.

## Folder structure

```
src
    app.js              # The main entry point that create an instance of our application.
    server.js           # Script to start our server.
    create-symlink.js   # Script that we use to avoid doing ../../  for relative requires.
    routes              # We define Express routes here.
    config              # Environment variables and configuration.
    loaders             # Split the startup process into tiny modules.
    models              # Put your database-related code here (models, queries, etc).
    services            # Business tier: all the business logic is here.
```
