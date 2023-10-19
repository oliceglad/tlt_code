from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)
class GetFile(Resource):
    def post(self):
        return {'data': request.args}

api.add_resource(GetFile, '/file')