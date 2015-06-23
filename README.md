# Docker Cluster Monitoring

[docker-compose](https://docs.docker.com/compose/install/) setup for cluster monitoring using [cAdvisor](https://github.com/google/cadvisor), [Tasseo](https://github.com/obfuscurity/tasseo) & [InfluxDB](http://influxdb.com/)

This setup assumes that you have:

1. docker-compose >= 1.2
2. boot2docker on a mac

Just `docker-compose up` and go to `http://192.168.59.103:5000/influx-cadvisor` (or the appropriate docker host IP)

This will run:

- 2 cAdvisor containers on ports `8080` & `8081`
- InfluxDB on `8083`, username & password of `root`
- tasseo on `5000` with a few dashboards.
