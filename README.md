## setup instruction
To start dev environment, please run,

```
sudo npm start
```

To build for production, please run

```
sudo npm run build
```

To build dev docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.dev -t mfp-marketing-image-dev .
```
To build prod docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.prod -t mfp-marketing-image-prod .
```

To start a development container, please run

```
sudo docker container run -d -p 8081:8081 --name mfp-marketing mfp-marketing-image-dev
```

To start a prod container, please run

```
sudo docker container run -d -p 8081:80 --name mfp-marketing mfp-marketing-image-prod
```

To bash into to the container, please use

```
 sudo docker exec -it mfp-marketing-dev bash
```

To stop the dev container, use,

```
sudo docker container stop mfp-marketing-dev
```

To remove the dev container, use,

```
sudo docker container rm mfp-marketing-dev
```

To remove the dev image, use,

```
sudo docker image rm mfp-marketing-image-dev
```