import math

def calc_formula(length_three, length_two):
    height = length_three * 0.76
    return (1/3 * math.pi * ( length_three / 2 ) ** 2 * height + 1/2 * length_three * (length_two - length_three) * height) / 1000000

class CalcVolume:
    @staticmethod
    def calc_volume_stone(form):
        return calc_formula(300, 500)