FROM  ruby:2.1-slim
MAINTAINER del xie

RUN apt-get update -y && apt-get install git build-essential -y
RUN git clone https://github.com/obfuscurity/tasseo /tasseo

WORKDIR /tasseo

RUN gem install foreman
RUN bundle install

COPY influx-cadvisor.js /tasseo/dashboards/

ENTRYPOINT ["foreman", "start"]
