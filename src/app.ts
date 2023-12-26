import { Item } from './item';
var elem = document.getElementById('output');
var aBook = new Item('表示成功だ！', '引数で受け取るイメージがつかめた。');
aBook.say(elem);
