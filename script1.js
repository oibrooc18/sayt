let ads=["Гламурный","Веселый","Возбужденный","Взбудораженный","Стильный", "Крутой", "Сообразительный", "Смелый", "Милый"];
let nouns=["Директор предприятия", "Кондуктор","Учитель математики", "Водитель", "Старик", "Певец", "Могильщик", "Мальчик"];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
alert(ads[getRandomInt(0,8)]+' '+nouns[getRandomInt(0,7)]);
