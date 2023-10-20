import math
# import cv2
# import numpy as np

def calc_formula(length_three, length_two):
    height = length_three * 0.76
    return round((1/3 * math.pi * ( length_three / 2 ) ** 2 * height + 1/2 * length_three * (length_two - length_three) * height) / 1000000, 2)

class CalcVolume:
    @staticmethod
    def calc_volume_stone(form):
        # # Загрузка предварительно обученной модели YOLO
        # net = cv2.dnn.readNet("C:/Users/PC/Downloads/yolov4.weights", "C:/Users/PC/Downloads/yolov4.cfg")
        # # Загрузка классов объектов
        # classes = []
        # with open("C:/Users/PC/Downloads/coco.names", "r") as f:
        #     classes = f.read().strip().split("\n")
        #
        # # Загрузка видео
        # video_capture = cv2.VideoCapture("C:/Users/PC/Desktop/Датасеты для хакатона/Малая куча.mp4")
        #
        # while True:
        #     ret, frame = video_capture.read()
        #     if not ret:
        #         break
        #
        # height, width, _ = frame.shape
        #
        # # Создание бинарного большого изображения (blob) из кадра
        # blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
        #
        # # Запуск обнаружения объектов
        # net.setInput(blob)
        # outs = net.forward(net.getUnconnectedOutLayersNames())
        #
        # # Подготовка информации об объектах
        # class_ids = []
        # confidences = []
        # boxes = []
        #
        # # Обработка результатов
        # for out in outs:
        #     for detection in out:
        #         scores = detection[5☺
        #     class_id = np.argmax(scores)
        #     confidence = scores[class_id]
        #     if confidence > 0.5:  # Порог уверенности
        #         center_x = int(detection[0] * width)
        #     center_y = int(detection[1] * height)
        #     w = int(detection[2] * width)
        #     h = int(detection[3] * height)
        #
        #     # Координаты прямоугольника
        #     x = int(center_x - w / 2)
        #     y = int(center_y - h / 2)
        #
        #     boxes.append([x, y, w, h])
        #     confidences.append(float(confidence))
        #     class_ids.append(class_id)
        #     # Подавление нескольких обнаружений одного объекта
        #     indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
        #
        #     for i in range(len(boxes)):
        #         if
        #     i in indexes:
        #     x, y, w, h = boxes[i]
        #     label = str(classes[class_ids[i]])
        #     confidence = confidences[i]
        #     color = (0, 255, 0)  # Зеленая обводка
        #     cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
        #     cv2.putText(frame, f"{label} {confidence:.2f}", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
        #
        #     # Отображение кадра с обнаруженными объектами
        #     cv2.imshow("Object Detection", frame)
        #
        #     if cv2.waitKey(1) & 0xFF == ord('q'):
        #         break
        #
        # # Освобождение ресурсов
        # video_capture.release()
        # cv2.waitKey(0)
        # cv2.destroyAllWindows()
        if 'большой' in form.lower():
            return calc_formula(3*150, 1200)
        else:
            return calc_formula(3*150, 300)
