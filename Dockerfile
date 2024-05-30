# use Node.js image as foundation
FROM node:14-alpine

# setup working content
WORKDIR /app

# copy the files into container
COPY . .

# install dependencies
RUN npm install

# expose port
EXPOSE 8080

# run
CMD ["npm", "start"]