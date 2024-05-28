# blog

## 概要

ブログ用のリポジトリ。

## 開発環境

記事を作成する際には下記環境を構築する。

- https://github.com/silverag-corgi/dev-container-jekyll

## 公開先

このブログは`main`ブランチへのプッシュを検知した際、
GitHubActionsがセーフモードOFFのJekyllで静的ページを生成して`gh-pages`ブランチへプッシュし、
GitHubPagesが下記URLに公開する。

- https://silverag-corgi.github.io/blog/
