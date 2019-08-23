#!/bin/bash
cd /home/ubuntu/react-redux-aws-deploy
forever start -a -l /home/ubuntu/react-redux-aws-deploy/api.log cross-env NODE_ENV=development node server --port 3001
