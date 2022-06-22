var exec = require('child_process').exec;
exec('"./minio.exe" server C:/minio --console-address :9090 --address :9001', {windowsHide: true});