from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS
from model.calc_volume import CalcVolume
import json


app = Flask(__name__)
CORS(app)
api = Api(app)
get_calc = CalcVolume.calc_volume_stone
class GetFile(Resource):
    def post(self):
        return {'data': get_calc(dict(request.files)['file'].filename)}

api.add_resource(GetFile, '/file')