export class Item {
  constructor(
    private name: string,
    private price: string,
  ) {}

  public say(elem: HTMLElement | null): void {
    if (elem) {
      // 引数がnullでない場合
      elem.innerHTML =
        'タイトル：' + this.name + '  挨拶: ' + this.price + 'です';
    }
  }
}
