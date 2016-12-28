FROM aparedes/alpine-node-yarn:node-7

ADD . /app

RUN cd /app && yarn

CMD cd /app/packages/server && \
    yarn start
