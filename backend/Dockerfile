FROM golang:1.16

EXPOSE 8080

COPY /example-backend /app

WORKDIR /app

ENV REQUEST_ORIGIN=http://localhost:5000

RUN go build

CMD [ "./server" ]

