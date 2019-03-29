const verbs = [{
    id: 0,
    forms: ["с", "север"]
}, {
    id: 1,
    forms: ["в", "восток"]
}, {
    id: 2,
    forms: ["ю", "юг"]
}, {
    id: 3,
    forms: ["з", "запад"]
}, {
    id: 4,
    forms: ["х", "вверх", "наверх", "поднимись"]
}, {
    id: 5,
    forms: ["н", "вниз", "спустись"]
}, {
    id: 6,
    forms: ["св", "северо-восток"]
}, {
    id: 7,
    forms: ["сз", "северо-запад"]
}, {
    id: 8,
    forms: ["юв", "юго-восток"]
}, {
    id: 9,
    forms: ["юз", "юго-запад"]
}, {
    id: 10,
    forms: ["инструкция", "информация", "инфо"]
}, {
    id: 11,
    forms: ["выход", "конец", "закончи", "хватит"]
}, {
    id: 12,
    forms: ["и", "инвентарь"],
}, {
    id: 13,
    forms: ["сохрани", "сохранить", "сохр", "save", "запиши", "запись"],
}, {
    id: 14,
    forms: ["загрузи", "загрузить", "загр", "load"],
}, {
    id: 15,
    forms: ["возьми", "подними", "бери", "забери", "взять", "поднять", "забрать", "брать"],
    method: "takeItem"
}, {
    id: 16,
    forms: ["положи", "выбрось", "оставь", "выброси", "положить", "выбросить", "оставить"],
    method: "dropItem"
}, {
    id: 17,
    forms: ["о", "осм", "осмотри", "изучи", "исследуй", "осмотреть", "изучить", "исследовать"],
    method: "examine"
}, {
    id: 18,
    forms: ["брось", "кидай", "метни", "бросить", "кинуть", "метнуть"],
    method: "throw"
}, {
    id: 19,
    forms: ["говори", "поговори", "скажи", "поболтай", "болтай", "общайся", "пообщайся", "спроси", "говорить", "сказать", "поговорить", "поболтать", "болтать", "общаться", "пообщаться", "спросить"],
    method: "talk"
}, {
    id: 20,
    forms: ["купи", "приобрети", "покупай", "купить", "приобрести"],
    method: "buy"
}, {
    id: 21,
    forms: ["заплати", "заплатить", "плати", "платить"],
    method: "pay"
}, {
    id: 22,
    forms: ["ударь", "убей", "атакуй", "бей", "ударить", "убить", "атаковать", "бить"],
    method: "hit"
}, {
    id: 23,
    forms: ["руби", "поруби", "разруби", "заруби", "переруби", "сруби", "рубить", "разрубить", "порубить", "перерубить", "срубить"],
    method: "chop"
}, {
    id: 24,
    forms: ["открой", "отопри", "открыть", "отпереть"],
    method: "open"
}, {
    id: 25,
    forms: ["залезь", "заберись", "лезь", "карабкайся", "вскарабкайся", "залезть", "забраться", "лезть", "карабкаться", "вскарабкаться"],
    method: "climb"
}, {
    id: 26,
    forms: ["перейди", "пересеки", "перейти", "пересечь", "пройди", "пройти"],
    method: "cross"
}, {
    id: 27,
    forms: ["ломай", "сломай", "разломай", "поломай", "ломать", "сломать", "разломать", "поломать"],
    method: "destroy"
}, {
    id: 28,
    forms: ["прислони", "приставь", "поставь", "прислонить", "приставить", "поставить"],
    method: "lean"
}, {
    id: 29,
    forms: ["иди", "пойди", "отправляйся", "идти", "пойти", "отправиться"],
    method: "go"
}, {
    id: 30,
    forms: ["съешь", "ешь", "попробуй", "откуси", "есть", "съесть", "попробовать", "откусить"],
    method: "eat"
}, {
    id: 31,
    forms: ["включи", "зажги", "включить", "зажечь"],
    method: "turnOn"
}, {
    id: 32,
    forms: ["высыпь", "рассыпь", "высыпи", "посыпь", "сыпь", "высыпать", "рассыпать", "посыпать", "сыпать"],
    method: "pour"
}, {
    id: 33,
    forms: ["заправь", "заряди", "залей", "заправить", "зарядить", "залить"],
    method: "fuel"
}, {
    id: 34,
    forms: ["смажь", "смазать"],
    method: "oil"
}, {
    id: 35,
    forms: ["нажми", "потяни", "надави", "жми", "тяни", "дёрни", "нажать", "потянуть", "надавить", "жать", "тянуть", "дёрнуть", "дернуть", "дерни"],
    method: "press"
}, {
    id: 36,
    forms: ["отрази", "отбей", "отразить", "отбить"],
    method: "reflect"
}, {
    id: 37,
    forms: ["поцелуй", "целуй", "поцеловать", "целовать"],
    method: "kiss"
}, {
    id: 38,
    forms: ["разбуди", "буди", "разбудить", "будить"],
    method: "wake"
}]

export default verbs