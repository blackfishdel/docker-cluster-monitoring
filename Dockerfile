FROM       ruby:2.1-slim
MAINTAINER chr0n1x <heilong24@gmail.com>

RUN apt-get update -y && apt-get install git build-essential -y
RUN git clone https://github.com/obfuscurity/tasseo /tasseo

WORKDIR /tasseo

RUN gem install foreman
RUN bundle install

ENTRYPOINT ["foreman", "start"]
