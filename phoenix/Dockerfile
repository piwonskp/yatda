FROM elixir

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN mix local.hex --force
RUN mix deps.get
