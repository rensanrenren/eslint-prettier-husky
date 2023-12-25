import { Item } from './item';
var elem = document.getElementById('output');
var aBook = new Item('開けたね！', '最高');
aBook.say(elem);
