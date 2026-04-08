# indigoart.lp-web.net デプロイ手順書

## 概要
このドキュメントは、indigoart.lp-web.net のファイルをXサーバー等の本番環境にアップロードする際の手順と注意事項をまとめたものです。
GitHubのリポジトリには開発専用ファイルが含まれているため、**サーバーにはサイトを構成するファイルのみ**をアップロードしてください。

---

## サーバーにアップロードするファイル（対象）

以下のファイル・フォルダのみをアップロードしてください。

| 対象 | 説明 |
|------|------|
| `index.php` | トップページ |
| `header.php` | 共通ヘッダー |
| `footer.php` | 共通フッター |
| `head-common.php` | 共通headタグ読み込み |
| `css/` | スタイルシート一式 |
| `js/` | JavaScriptファイル一式 |
| `assets/` | 画像・メディアファイル一式 |
| 各サブディレクトリ（`service/`, `gallery/`, `experience/`, `shop/`, `pricing/`, `faq/`, `contact/` 等） | 下層ページ |

---

## サーバーにアップロードしないファイル（除外対象）

以下のファイル・フォルダは開発専用のため、**絶対にサーバーにアップロードしないでください。**

| 除外対象 | 理由 |
|----------|------|
| `.gitignore` | Git管理設定ファイル。サイト表示に無関係 |
| `.git/` | Gitバージョン管理フォルダ。サイト表示に無関係 |
| `DEPLOY.md` | この手順書自体。サイト表示に無関係 |
| `server.py` | ローカル開発用サーバースクリプト。サイト表示に無関係 |
| `__pycache__/` | Python実行時キャッシュ。サイト表示に無関係 |
| `.DS_Store` | macOS自動生成メタデータ。サイト表示に無関係 |
| `_agents/` / `.agents/` | AI用ワークフロー定義。サイト表示に無関係 |
| `*.pyc` | Pythonコンパイル済みファイル。サイト表示に無関係 |

---

## AI（Antigravity等）への指示テンプレート

サーバーアップロードをAIに依頼する際は、以下のように指示してください。

### 指示例
```
indigoart.lp-web.net をサーバーにアップロードしてください。
DEPLOY.md の手順に従って、除外対象ファイルを含めずにアップロードしてください。
```

### AIが実行すべき手順
1. このDEPLOY.mdを読み込む
2. 除外対象リストに記載されたファイル・フォルダを特定する
3. サイト構成ファイルのみをFTP/SFTP/rsync等でアップロードする
4. アップロード完了後、除外対象ファイルがサーバーに存在しないことを確認する

### rsyncコマンド例（AIが使う場合）
```bash
rsync -avz --delete \
  --exclude='.git/' \
  --exclude='.gitignore' \
  --exclude='DEPLOY.md' \
  --exclude='server.py' \
  --exclude='__pycache__/' \
  --exclude='.DS_Store' \
  --exclude='_agents/' \
  --exclude='.agents/' \
  --exclude='*.pyc' \
  ./ ユーザー名@サーバー:/path/to/public_html/
```

---

## 注意事項
- サーバー上の既存ファイルを上書きする前に、必ずバックアップを取ること
- 画像ファイル名に日本語が含まれていないことを事前確認すること（`find ./assets -type f | grep -P '[^\x00-\x7F]'`）
- アップロード後は本番URL（https://indigoart.lp-web.net/）でブラウザ表示確認を行うこと
