  

# Usefull commands

## DockerHub - Personalized containters

First define the docker container structure in a Dockerfile

	FROM ibmfunctions/action-python-v3.6

	RUN pip install \
	--upgrade pip \
	matplotlib \
	pandas \
	statsmodels

	RUN pip install \
	keras \
	pillow \
	tensorflow==2.0


Build a docker image from that file

    docker build -t robertoesp/python3.6-sm:0.1.0 .

Push that image to `DockerHub`

    docker push robertoesp/python3.6-sm:0.1.0

Can be run on local machines for testing

    docker run -it -v /path/to/files:/home robertoesp/python3.6-sm:0.1.0 /bin/bash



## IBM functions - Serverles code execution

  IBM functions accepts more than one file if those are send in a zip file

    zip -r predict.zip __main__.py first_try.h5 predict.py
  
To create a function from a zip file and using a docker container as enviorement

    ibmcloud fn action create sf-predict --docker robertoesp/python3.6-sm:0.1.0 predict.zip

  
To update a function from a zip file and using a docker container as enviorement

    ibmcloud fn action update sf-predict --docker robertoesp/python3.6-sm:0.1.0 predict.zip

  

To invoke the funcition with or without parameters and get the result

	ibmcloud fn action invoke sf-predict --result

	ibmcloud fn action invoke sf-predict --result --param name Roberto

The funcion can also be executed in the IBM Functions page and from a URL
  
     https://us-south.functions.cloud.ibm.com/api/v1/web/roberto.ignacio.esparza.soto%40ibm.com_dev/default/sf-predict.json

The `.json` at the end indicate the format response expected, it could be changed


