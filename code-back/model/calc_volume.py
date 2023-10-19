import math

def calc_formula(length_one, length_two, width):
    height = width * 0.5
    return (1/3 * math.pi * ( width / 2 ) ** 2 * height + 1/2 * width * (length_two - length_one) * height) / 1000000

class CalcVolume:
    @staticmethod
    def calc_volume_stone(form):
        return calc_formula(300,300,300)

print(CalcVolume.calc_volume_stone({}))