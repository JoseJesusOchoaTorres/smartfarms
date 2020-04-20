from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import base64
from io import BytesIO


def loadModel():
    model = load_model('first_try.h5')
    model.compile(loss='binary_crossentropy',
            optimizer='rmsprop',
            metrics=['accuracy'])
    return model


def predict(dict):
    img_width, img_height = 150, 150

    response = {}
    response["code"] = "400"
    response["message"] = "Error"
    response["success"] = "false"

    if 'img' in dict:
        # The image from the request
        requestImg = dict['img']
        # Split the image in two possiton array
        requestImgSplited = requestImg.split('base64,')
        # Get the base64 image value
        imgEncoded = requestImgSplited[1]
        # Decoding base64 image
        img = BytesIO(base64.b64decode(imgEncoded)

        img = image.load_img(img), target_size=(img_width, img_height))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)

        model = loadModel()
        images = np.vstack([x])
        classes = model.predict_classes(images, batch_size=10)
        
        # Parsing the array into string
        res = classes.astype(str)

        response["code"] = "200"
        response["success"] = "true"
        response["message"] = res[0][0]
    return response
