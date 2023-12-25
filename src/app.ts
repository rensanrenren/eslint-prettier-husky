import { Item } from './item';
var elem = document.getElementById('output');
var aBook = new Item('開けたね！', 'yes 高須クリニック');
aBook.say(elem);
