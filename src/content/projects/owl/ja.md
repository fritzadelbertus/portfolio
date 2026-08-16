---
title: "OWL: GMW-FSポスト量子デジタル署名"
description: "GMW-FSパラダイムにおいて、我々はモジュラー格子同型問題（HAWK）から群作用を定式化し、最適化されたPQC署名バリアントをPythonで実装した。"
category: "Systems"
tags: ["暗号化", "グループアクション", "格子暗号", "C", "Python", "Fiat-Shamir"]
metrics: "OWL-LITEとOWL-ONEは構築された。"
github: "https://github.com/fritzadelbertus/owl-gmw-fs"
featured: true
---

## 概要

私たちは、HAWKのモジュール格子同型性問題（mLIP）をGoldreich-Micali-Wigderson Fiat-Shamir（GMW-FS）署名フレームワークに定式化することで、グループアクションベースの暗号と格子ベースのセキュリティの間のギャップを埋めました。そして、その結果得られた署名プロトコルを設計、実装、最適化し、実用的なバリアント（OWL-LITEとOWL-ONE）を作成するとともに、メモリ使用量と計算遅延の大幅な削減を実証しました。


## 問題と動機

量子コンピューティングが従来の公開鍵暗号（RSA/ECC）を脅かすにつれ、暗号プリミティブは格子や群作用などの代数構造へと移行しつつあります。ALTEQのようなスキームはテンソル同型性問題（ATFE）上の群作用を利用していますが、HAWKの基盤となるモジュラー格子同型性などの複雑な問題は、柔軟なGMW-FS認証署名パラダイムにおいて明確な定式化が欠如していました。本研究の目的は、HAWKの格子構造から群作用を導出し、ゼロ知識認証プロトコルを構築し、Fiat-Shamir変換を適用し、最適化された実装を設計することによって、これらの領域を統合することです。


## 数学的および建築的アプローチ

### グループアクションの構築
HAWKによって生成された秘密鍵の構造を分析し、モジュラー格子オブジェクトに対する自然な群作用を定義することにより、ALTEQのテンソル同型性アプローチに直接対応する手法を作成しました。

### 本人確認から署名に至るパラダイム
このグループアクションはGMW識別フレームワークに統合され、Fiat-Shamir変換を用いて非対話型のデジタル署名スキームに変換された。

### エンジニアリング最適化
* OWL-LITE: メモリ使用量を最小限に抑え、署名サイズをコンパクトに保ちながら、目標とするセキュリティレベルを達成するためのカスタマイズされたパラメータ設定。
* OWL-ONE: 特殊な群作用軌道を利用することで、冗長な代数変換が排除され、検証効率が大幅に向上した。

## パフォーマンス結果
ALTEQ、HAWK、OWLの性能比較
| | ALTEQ | HAWK | OWL |
| :--- | :--- | :--- | :--- |
| メモリ（バイト） | | | |
| 公開鍵 | 12095 | 1024 | 65536 |
| 秘密鍵 | 32 | 184 | 57344 |
| 署名 | 25631 | 555 | 688160 |
| 実行時間（秒） | | | |
| 鍵の生成 | 0.0252 | 2.6096 | 13.2670 |
| 署名する | 0.3262 | 0.0350 | 135.2957 |
| 検証 | 0.2660 | 1.7677 | 5.0198 |

OWL最適化バージョン（HAWKとの比較）

| | HAWK | OWL-LITE | | OWL-ONE | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| メモリ（バイト） | | | | |
| 公開鍵 | 1024 | 16384 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1500%</span> | 8192 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+700%</span> |
| 秘密鍵 | 184 | 8192 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+4352%</span> | 24 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−86.95%</span> |
| 署名 | 555 | 8224 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1381%</span> | 8224 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1381%</span> |
| 実行時間（秒） | | | | |
| 鍵の生成 | 2.6096 | 3.7918 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+45.30%</span> | 2.2483 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−13.85%</span> |
| 署名する | 0.0350 | 1.6462 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+4603%</span> | 3.2722 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+9249%</span> |
| 検証 | 1.7677 | 0.0603 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−96.58%</span> | 0.0610 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−96.55%</span> |
