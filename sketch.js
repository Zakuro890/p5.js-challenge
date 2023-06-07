let img, cnv;

function preload() {
  img = loadImage("github.png"); // 画像の読み込み
  // console.log(img.width)
}

function setup() {
  cnv = createCanvas(img.width, img.height); // 画像の幅と高さに基づいてキャンバスを作成

  let newX = (windowWidth - img.width) / 2; // ウィンドウの幅から画像の幅を引き、中央に配置するX座標を計算
  let newY = (windowHeight - img.height) / 2; // ウィンドウの高さから画像の高さを引き、中央に配置するY座標を計算
  cnv.position(newX, newY); // キャンバスを指定した位置に配置

  for (let x = 0; x < img.width; x += 3) {
    for (let y = 0; y < img.height; y += 3) {
      let c = img.get(x, y); // 画像のピクセルの色を取得

      push(); // 状態を保存

      // 原点の移動
      translate(x, y);

      // 回転
      rotate(random(TAU)); // 0から2πまでのランダムな回転

      // 装飾用の点
      push(); // 状態を保存

      stroke(0); // 線の色を黒に設定
      fill(0); // 塗りの色を黒に設定
      strokeWeight(random(5)); // 線の太さをランダムに設定
      point(x, y); // 座標(x, y)に点を描画

      stroke(color(c)); // 線の色を画像のピクセルの色に設定
      strokeWeight(3); // 線の太さを3に設定
      point(x, y); // 座標(x, y)に点を描画

      // 曲線の描画
      curve(
        x,
        y,
        sin(x) * random(60), // X方向の制御点1の座標
        cos(x) * sin(x) * random(60), // Y方向の制御点1の座標
        0, // 始点のX座標
        0, // 始点のY座標
        cos(y) * sin(x) * random(120), // X方向の制御点2の座標
        cos(y) * sin(y) * 50 // Y方向の制御点2の座標
      );

      pop(); // 状態を復元

      pop(); // 状態を復元
    }
  }
}
