import math

def calc_formula(length_one, length_two, width):
    height = (length_two - length_one) / 2
    return 1/3 * math.pi * ( width /2 ) * height + 1/2 * width * (length_two - length_one) * height

class CalcVolume:
    @staticmethod
    def calc_volume_stone(form):
        return calc_formula(1,2,3)
