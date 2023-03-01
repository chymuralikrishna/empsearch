FROM node:18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
CMD [{"npm", "start"},{"npm", "run dev"}]

#docker 

#For React Image Creation: 
#docker build -t containername:tag
#For Running Container: 
#docker run -it -p 3000:3000 containername:tag
#Featured playlist