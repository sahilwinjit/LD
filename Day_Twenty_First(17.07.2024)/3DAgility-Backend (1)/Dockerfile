FROM ubuntu:18.04

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN apt-get update -y && apt-get install -y software-properties-common
RUN add-apt-repository ppa:ethereum/ethereum
RUN apt-get upgrade -y && apt-get install -y make cmake solc libssl-dev python3-dev libjpeg-dev python3-pip
RUN apt-get install -y autoconf automake build-essential libffi-dev libtool pkg-config
RUN pip3 install coincurve --no-binary coincurve
RUN pip3 install mythril
RUN myth version
RUN npm install
COPY . .

# Command to run app
CMD npm run start