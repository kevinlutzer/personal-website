# Start the web frontend
start-web:
    npm --prefix ./web install
    npm --prefix ./web run start

# Build the web frontend
build-web:
    #!/bin/bash
    npm --prefix ./web install
    npm --prefix ./web run build
