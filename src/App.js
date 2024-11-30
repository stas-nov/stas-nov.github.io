import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

// Page Components
const GymInfo = () => (
  <div>
    <h1>ジムについて</h1>
    <p>ようこそ、エーアイジムへ</p>
    <p>エーアイジムは、ただのフィットネスセンターではありません。健康とウェルネスを追求するコミュニティです。経験豊富なアスリートからフィットネス初心者まで、最新の設備と専門トレーナーがあなたの目標達成をサポートします。</p>
    <h2>私たちの強み</h2>
    <ul>
      <li>最先端のトレーニング機器（筋力トレーニング、カーディオ、有酸素運動用）。</li>
      <li>個別指導が可能なプロフェッショナルトレーナー。</li>
      <li>モチベーションを高める快適な環境。</li>
    </ul>
    <h2>ロケーションと営業時間</h2>
    <p>本店: [住所]</p>
    <ul>
      <li>月曜～金曜: 午前6時～午後11時</li>
      <li>土曜・日曜: 午前8時～午後9時</li>
      <li>祝日: 午前8時～午後9時</li>
    </ul>
  </div>
);

const MembershipPlans = () => (
  <div>
    <h1>会員プランと料金</h1>
    <h2>柔軟な会員プラン</h2>
    <p>初心者から熱心なフィットネス愛好家まで、誰にでも合うプランをご用意しています:</p>
    <ul>
      <li>月額会員: 月額¥9,800（無制限アクセス）。</li>
      <li>1日利用券: ¥1,500/日。</li>
      <li>ファミリープラン: 月額¥18,000（家族3名まで）。</li>
    </ul>
    <h2>会員登録の方法</h2>
    <p>簡単に会員になれます！[会員登録ページ]から登録するか、フロントデスクでスタッフにお声がけください。</p>
    <h2>キャンペーン</h2>
    <ul>
      <li>新規会員特典: 初月50％オフ！</li>
      <li>紹介プログラム: お友達を紹介すると1か月無料！</li>
    </ul>
  </div>
);

const TrainingSupport = () => (
  <div>
    <h1>トレーニングサポート</h1>
    <h2>パーソナルトレーニング</h2>
    <p>資格を持つトレーナーと一緒に1対1でトレーニング。減量、筋力増強、運動能力向上など、目標に合わせたサポートを提供します。</p>
    <h2>グループクラス</h2>
    <p>すべてのレベルに対応した楽しいグループクラスに参加できます:</p>
    <ul>
      <li>ヨガ</li>
      <li>HIIT（高強度インターバルトレーニング）</li>
      <li>スピンクラス</li>
      <li>ズンバ</li>
    </ul>
    <h2>カスタマイズフィットネスプラン</h2>
    <p>個々のニーズと目標に合わせたフィットネスプランをご提供します。</p>
    <h2>トレーニングアドバイス</h2>
    <ul>
      <li>継続性を大切に: 週3～4回のトレーニングを目指しましょう。</li>
      <li>身体に栄養を: タンパク質、炭水化物、健康的な脂肪を含むバランスの取れた食事を心がけましょう。</li>
      <li>準備運動と整理運動: 怪我を防ぐために準備運動と整理運動を忘れずに。</li>
    </ul>
  </div>
);

const StudioAndFacilities = () => (
  <div>
    <h1>スタジオと設備</h1>
    <h2>スタジオ紹介</h2>
    <ul>
      <li>ヨガスタジオ: ヨガや瞑想に最適な落ち着いた空間。</li>
      <li>スピンスタジオ: 高性能バイクを使ったエネルギッシュなサイクリングクラス。</li>
      <li>機能的トレーニングゾーン: ケトルベルスイング、TRXトレーニングなどに対応。</li>
    </ul>
    <h2>設備</h2>
    <ul>
      <li>シャワー付きの広々としたロッカールーム。</li>
      <li>無料ドリンクが楽しめるリラクゼーションラウンジ。</li>
      <li>トレーニング後にぴったりのスムージーバーを併設。</li>
    </ul>
  </div>
);

const FAQAndContact = () => (
  <div>
    <h1>よくある質問とお問い合わせ</h1>
    <h2>よくある質問</h2>
    <ul>
      <li>タオルは持参する必要がありますか？ すべての会員にタオルを無料で提供しています。</li>
      <li>駐車場はありますか？ 会員専用の無料駐車場をご利用いただけます。</li>
    </ul>
    <h2>お問い合わせ</h2>
    <p>ご質問があれば、以下までお気軽にご連絡ください:</p>
    <ul>
      <li>電話番号: [電話番号]</li>
      <li>メールアドレス: [メールアドレス]</li>
      <li>住所: [住所]</li>
    </ul>
  </div>
);

// Main App Component
function App() {
  return (
    <div>
      <nav>
        <Link to="/">ジムについて</Link> |{" "}
        <Link to="/membership">会員プランと料金</Link> |{" "}
        <Link to="/training">トレーニングサポート</Link> |{" "}
        <Link to="/studio">スタジオと設備</Link> |{" "}
        <Link to="/faq">よくある質問とお問い合わせ</Link>
      </nav>
      <Routes>
        <Route path="/" element={<GymInfo />} />
        <Route path="/membership" element={<MembershipPlans />} />
        <Route path="/training" element={<TrainingSupport />} />
        <Route path="/studio" element={<StudioAndFacilities />} />
        <Route path="/faq" element={<FAQAndContact />} />
      </Routes>
    </div>
  );
}

export default App;
