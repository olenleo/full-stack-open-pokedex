#!/bin/bash

echo "Health check shell script starts"
health=$(curl https://billowing-morning-6944.fly.dev/health)

if [ "$health"=="ok" ]; then
	echo "Health check was successful!"
	exit 0; # exit status 1 means that the script "fails"
else echo "Health check failed!"
exit 1
fi