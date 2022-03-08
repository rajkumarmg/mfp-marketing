## setup instruction
To start dev environment, please run,

```
sudo npm start
```

To build for production, please run

```
sudo npm run build
```

To build docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.dev -t mfp-marketing-image .
```
To start a development container, please run

```
sudo docker container run -d -p 8081:8081 --name mfp-marketing mfp-marketing-image
```

To start a prod container, please run

```
sudo docker container run -d -p 8081:80 --name mfp-marketing mfp-marketing-image
```

To bash into to the container, please use

```
 sudo docker exec -it mfp-marketing bash
```

To stop the container, use,

```
sudo docker container stop mfp-marketing
```

To remove the container, use,

```
sudo docker container rm mfp-marketing
```