# tech-biwa

システム開発・AI導入・技術研修を提供する企業のランディングページです。

## 技術スタック

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui

## 開発環境のセットアップ

```bash
# パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

## プロジェクト構成

```
.
├── app/              # Next.js アプリケーションのルート
├── components/       # 共通コンポーネント
├── public/          # 静的ファイル
├── styles/          # グローバルスタイル
└── lib/             # ユーティリティ関数
```

## デプロイ

このプロジェクトはGitHub Pagesにデプロイされています。

### デプロイURL
https://[ユーザー名].github.io/tech-biwa/

### 自動デプロイ
mainブランチにプッシュすると、GitHub Actionsによって自動的にデプロイされます。

デプロイの流れ：
1. mainブランチへのプッシュをトリガーにGitHub Actionsが起動
2. Next.jsプロジェクトのビルド
3. 静的ファイルの生成
4. GitHub Pagesへのデプロイ

### 手動デプロイ（開発者向け）
1. ローカルでビルド
```bash
npm run build
```
2. 生成された`out`ディレクトリの内容がデプロイされます

## お問い合わせ

- [お問い合わせフォーム](https://docs.google.com/forms/d/1UWWehrs7Z_MPH3QVjMA6ivZ0ApJJo6AP4HA5FPbDdUs/viewform)
- [X (Twitter)](https://x.com/ola_jp_ai)
- [note](https://note.com/muccccchiiii)

## ライセンス

© 2024 tech-biwa. All rights reserved.
