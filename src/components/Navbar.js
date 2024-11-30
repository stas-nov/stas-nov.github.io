import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>エーアイジム</h1>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/about">ジムについて</Link></li>
        <li><Link to="/membership">会員プランと料金</Link></li>
        <li><Link to="/training">トレーニングサポート</Link></li>
        <li><Link to="/studio">スタジオと設備</Link></li>
        <li><Link to="/faq">よくある質問とお問い合わせ</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
