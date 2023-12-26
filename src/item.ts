export class Item {
  constructor(
    private name: string,
    private price: string,
  ) {}

  public say(elem: HTMLElement | null): void {
    if (elem) {
      // 引数がnullでない場合
      elem.innerHTML =
        '初めてのTypeScript開発<br>' + this.name + '<p>意外にも書いてみると簡単である。<br>' + this.price;
    }
  }
}
