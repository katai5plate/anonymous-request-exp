# anonymous-request-exp

自分のIPアドレスを隠してHTTPリクエストを送ったりする方法のサンプル

## usage

### 必要なブツ

- tor
  - Windows: `choco install tor` (要 chocolatey)
  - Mac: `brew install tor` (要 homebrew)
  - Linux: `apt-get install tor`
- Node.js
- Git

### インストール

1. リポジトリをクローンする `git clone https://github.com/katai5plate/anonymous-request-exp`
2. ディレクトリを開く `cd anonymous-request-exp`
3. 依存モジュールをインストール `npm i`
4. tor を実行 `tor`
5. プログラムを実行 `npm start`

### 実行結果

```
Your Original IP is XXX.XXX.XXX.XXX
Your Anonymous IP is XXX.XXX.XXX.XXX
```

- `Your Original IP` あなたの普通の IP アドレス
- `Your Anonymous IP` このプログラムを実行している間だけ適用された匿名化された IP アドレス
