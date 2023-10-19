from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS
from model.calc_volume import CalcVolume


app = Flask(__name__)
CORS(app)
api = Api(app)
get_calc = CalcVolume.calc_volume_stone({})
class GetFile(Resource):
    def post(self):
        print(request)
        return {'data': get_calc}

api.add_resource(GetFile, '/file')