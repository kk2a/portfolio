import Image from "next/image";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Separator,
  Text,
} from "./components/Ui";
import { MathFormula } from "./components/MathFormula";

const atcoderBadge =
  "https://img.shields.io/endpoint?url=https://atcoder-badges.now.sh/api/atcoder/json/kk2a";

function ImageGallery({ children }: { children: React.ReactNode }) {
  return <div className="image-gallery">{children}</div>;
}

function Section({
  id,
  index,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <Flex align="start" gap="4" className="section-heading">
        <Text className="section-index" size="2" weight="bold">
          {index}
        </Text>
        <Box>
          <Heading as="h2" size="6">
            {title}
          </Heading>
          <Text as="p" size="2" color="gray" className="section-description">
            {description}
          </Text>
        </Box>
      </Flex>
      <Separator size="4" my="5" />
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Container size="4" className="hero-content">
          <Flex direction="column" gap="5" className="header-content">
            <Badge color="cyan" variant="soft" size="2" className="hero-badge">
              PORTFOLIO / 2025—2026
            </Badge>
            <Box>
              <Heading as="h1" size="9" className="hero-title">
                こんにちは
              </Heading>
              <Text as="p" size="5" color="gray" className="header-subtitle">
                kk2a のポートフォリオ
              </Text>
            </Box>
            <Text as="p" size="3" color="gray" className="hero-intro">
              数学とプログラミングを楽しみながら、考えたことを形にしています。
            </Text>
            <Flex gap="3" wrap="wrap">
              <Button asChild size="3">
                <a href="https://github.com/kk2a">GitHubを見る ↗</a>
              </Button>
              <Button asChild size="3" variant="soft" color="gray">
                <a href="#about">プロフィールを読む ↓</a>
              </Button>
            </Flex>
          </Flex>
          <Box className="hero-orbit" aria-hidden="true">
            <span>∑</span>
            <span>F₂</span>
            <span>&lt;/&gt;</span>
          </Box>
        </Container>
      </header>

      <main>
        <Container size="4" className="page-shell">
          <div className="portfolio-grid">
            <aside className="profile-rail">
              <Card className="profile-card">
                <Text size="1" weight="bold" color="cyan" className="rail-label">
                  INDEX
                </Text>
                <Heading as="h2" size="6" mt="2">
                  kk2a
                </Heading>
                <Text as="p" size="2" color="gray" mt="2">
                  大阪公立大学高専 / 数学・競技プログラミング
                </Text>
                <Separator size="4" my="5" />
                <nav aria-label="ページ内ナビゲーション" className="rail-nav">
                  <a href="#about"><span>01</span> 自己紹介</a>
                  <a href="#activities"><span>02</span> やっていること</a>
                  <a href="#experience"><span>03</span> 経験</a>
                  <a href="#projects"><span>04</span> プロダクト</a>
                  <a href="#links"><span>05</span> リンク</a>
                </nav>
                <Separator size="4" my="5" />
                <Flex gap="2" wrap="wrap">
                  <Badge color="cyan" variant="outline">数学</Badge>
                  <Badge color="violet" variant="outline">C++</Badge>
                  <Badge color="amber" variant="outline">TypeScript</Badge>
                </Flex>
              </Card>
            </aside>

            <div className="content-column">
        <Section id="about" index="01" title="自己紹介" description="興味のあること、今取り組んでいること">
          <p>大阪公立大学高専に通っている四年生です．</p>
          <p>数学が好きです．今は，代数学Ⅲ (桂) を読んでいます．</p>
          <p>競プロも好きです．</p>
          <ImageGallery>
            <Image
              src="/assets/IMG_4353.jpg"
              alt="プロフィール写真"
              width={3004}
              height={2881}
              className="profile-image"
            />
            <Image
              src="/assets/IMG_5159.JPG"
              alt="活動中の写真"
              width={4032}
              height={3024}
              className="profile-image"
            />
            <Image
              src="/assets/IMG_5620.jpg"
              alt="活動中の写真"
              width={3024}
              height={4032}
              className="profile-image"
            />
          </ImageGallery>
        </Section>

        <Section id="activities" index="02" title="やっていること" description="手を動かして試している技術">
          <ul>
            <li>
              <h3>数学</h3>
              <ul>
                <li>
                  たまに
                  <a href="https://mathlog.info/users/1958">Mathlog</a>
                  を更新しています．
                </li>
                <li>LaTeXも使えます．LuaLaTeXを使用しています．</li>
              </ul>
            </li>
            <li>
              <h3>プログラミング</h3>
              <ul>
                <li>
                  <h4>C，C++</h4>
                  <ul>
                    <li>C++は競プロで使っています．</li>
                    <li>
                      AtCoderをやっています．{" "}
                      <a href="https://atcoder.jp/users/kk2a">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="badge" alt="AtCoder の kk2a プロフィール" src={atcoderBadge} />
                      </a>
                    </li>
                    <li className="image-item">
                      <Image
                        src="/assets/blue_coder_kk2.png"
                        alt="AtCoderで青色になった時の記念スクリーンショット"
                        width={1190}
                        height={875}
                        className="achievement-image"
                      />
                      <span className="caption">青色になった時の記念スクショ</span>
                    </li>
                    <li>
                      趣味と競プロのために，
                      <a href="https://github.com/kk2a/library">ライブラリ</a>
                      を作成しています．<MathFormula formula="\mathbf{F}_2" />
                      の行列とかが好きです．
                    </li>
                    <li className="image-item">
                      <Image
                        src="/assets/fastest.png"
                        alt="形式的冪級数ライブラリのベンチマーク結果"
                        width={1427}
                        height={602}
                        className="achievement-image"
                      />
                      <span className="caption">
                        形式的冪級数のライブラリで最速だったので記念のスクショ
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Python</h4>
                  <ul>
                    <li>
                      画像処理や機械学習の実習で使用しています．OpenCVやYOLOを活用して画像認識システムを開発したことがあります．
                    </li>
                    <li>
                      競プロや日常作業の自動化のために，いくつかのアプリケーションを開発しています．
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Rust</h4>
                  <ul>
                    <li>メモリ安全性や実行速度に魅力を感じて少しだけ使っています．</li>
                    <li>
                      Pythonで作った支援ツールを，Rustで書き換えて勉強をしています．
                    </li>
                    <li>CLIのツールしか作ってません．</li>
                  </ul>
                </li>
                <li>
                  <h4>TypeScript</h4>
                  <ul>
                    <li>Webアプリケーション開発に使用しています．Next.jsを使っています．</li>
                    <li>型安全性を活かした堅牢なアプリケーション開発を心がけています．</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section id="experience" index="03" title="経験" description="大会・セミナーでの活動記録">
          <div className="experience-list">
            <article>
              <h3>パソコン甲子園2022プログラミング部門</h3>
              <p>参加部門：モバイル</p>
              <ul>
                <li>予選順位：凍結前63位</li>
                <li>使用言語：C++</li>
              </ul>
            </article>
            <article>
              <h3>JMO夏季セミナー2023</h3>
              <ul>
                <li>
                  一般応募枠で
                  <a href="https://github.com/kk2a/jmoss2023/blob/main/paper.pdf">
                    論文
                  </a>
                  を送ったら通りました．論文の
                  <a href="https://github.com/kk2a/jmoss2023/blob/main/presentation.pdf">
                    発表
                  </a>
                  も行いました．
                </li>
                <li>ルベーグ積分の30講 (志賀 浩二) をやりました．</li>
              </ul>
            </article>
            <article>
              <h3>パソコン甲子園2023プログラミング部門</h3>
              <p>「✊☺☝️†最強†☝️☺✊」</p>
              <ul>
                <li>予選順位：凍結前35位</li>
                <li>本選順位：不明</li>
                <li>使用言語：C++</li>
              </ul>
            </article>
            <article>
              <h3>パソコン甲子園2024プログラミング部門</h3>
              <p>「目標：全国大会金賞」</p>
              <ul>
                <li>予選順位：10位</li>
                <li>本選順位：不明 (8位より下)</li>
                <li>使用言語：C++</li>
              </ul>
            </article>
            <article>
              <h3>JOI2024/2025</h3>
              <ul>
                <li>一次予選：400点 (100-100-100-100) Aランク</li>
                <li>二次予選：400点 (100-100-100-100-0) Aランク</li>
                <li>本選：265点 (100-100-49-16-0) Bランク</li>
              </ul>
            </article>
          </div>
        </Section>

        <Section id="projects" index="04" title="プロダクト" description="興味から始めて、実際に作ったもの">
          <ol className="project-list">
            <li>
              <h3>
                <a href="https://github.com/kk2a/othello">2023/07 オセロ</a>
              </h3>
              <p>
                Pythonの練習でオセロを作りました：
                <a href="https://github.com/kk2a/othello">リポジトリ</a>
              </p>
            </li>
            <li>
              <h3>
                <a href="https://github.com/kk2a/kosensai2-I-B">
                  2023/10-11 広告クソゲー
                </a>
              </h3>
              <p>
                2023年の高専祭にて，6人でチームを組み広告でよく見るゲーム（通称：数字タワー）を作成しました．
                <a href="https://github.com/kk2a/kosensai2-I-B">リポジトリ</a>
              </p>
              <p>デザイン以外ほとんどやりました．</p>
              <a className="project-image-link" href="https://github.com/kk2a/kosensai2-I-B">
                <Image
                  src="/assets/kuso_game.png"
                  alt="数字タワーのゲーム画面"
                  width={1593}
                  height={1012}
                  className="project-image"
                />
              </a>
            </li>
            <li>
              <h3>
                <a href="https://github.com/kk2a/Board_Game">2023/12-2024/2 ボドゲ大全</a>
              </h3>
              <p>
                <a href="https://github.com/kk2a/Board_Game">リポジトリ</a>
              </p>
              <p>
                任天堂の
                <a href="https://nintendo.co.jp/switch/as7ta/index.html">
                  世界のアソビ大全51
                </a>
                というゲームの実況動画を見て，実際に遊んでみたいなと思い，特に気になったものをピックアップして，実装しました．
              </p>
              <p>
                実際は，ピックアップしたものの半分は実装できておらず，特にGUIのことを考えると嫌な気分になり，中身の部分も手を付けていないです．そもそもルールが複雑なものも多い．
              </p>
              <p>
                (2024/2/25追記) PySideを用いて，一つのファイルを実行するだけで，すべてのゲームを選択できるようにしました．これにより，画面の大きさやボードのサイズなどの設定を簡単に変更できるようになりました．
              </p>
              <p>
                それぞれのゲームでは，設定を変えることができる部分やその自由度が異なるので，ゲームごとに設定ウィンドウを作成しましたが，設定ウィンドウのベースとなる部分をしっかり作りこみ，プログラムを構造化しました．そのため，各設定ウィンドウは必要最低限の引数だけで構成できるようになっています．(制作時間8時間)
              </p>
              <ImageGallery>
                <Image src="/assets/connect4.png" alt="四目並べの画面" width={1480} height={884} className="gallery-image" />
                <Image src="/assets/yacht.png" alt="ヨットの画面" width={1190} height={894} className="gallery-image" />
                <Image src="/assets/renju.jpg" alt="連珠の画面" width={1494} height={898} className="gallery-image" />
                <Image src="/assets/gui_first.png" alt="ゲーム選択画面" width={478} height={312} className="gallery-image" />
                <Image src="/assets/othello_setting.png" alt="オセロの設定画面" width={479} height={359} className="gallery-image" />
                <Image src="/assets/gui_othello.png" alt="オセロのゲーム画面" width={1013} height={810} className="gallery-image" />
              </ImageGallery>
            </li>
            <li>
              <h3>2024/8 ユーザースクリプトの技術解説</h3>
              <p>
                ウェブページのリンクは
                <a href="https://kk2a.github.io/userscript-template/">こちら</a>．
              </p>
            </li>
            <li>
              <h3>
                <a href="https://kk2a.github.io/react-todo-app/">
                  2024/11 Reactを用いたTodoアプリ
                </a>
              </h3>
              <p>Reactを用いたTodoアプリを作成しました．</p>
              <p>
                以下はリポジトリの
                <a href="https://github.com/kk2a/react-todo-app/blob/main/README.md">
                  README.md
                </a>
                からの引用
              </p>
              <ul>
                <li>
                  実装にこだわっています．関数コンポーネントは別のファイルで定義し，可読性の向上を図っています．また，型エイリアスを使い型を変更したりしてもコードの修正箇所を減らすようにしています．
                </li>
                <li>
                  大きな数を直感的に楽しめる表現を心がけています．大きな数値をそのまま視覚的に表現できる工夫をしています．例えば，優先度は0から1000までの整数で設定可能で，その数値に応じて同じ数だけ星を表示します．最大で1000個の星が画面に並ぶ様子は，とてもインパクトがあり，見る人の気持ちを高揚させます．こうした視覚的楽しさを重視したデザインが特徴です．さらに，同様の体験を提供する機能として，「クリスマスモード」も実装しています．
                </li>
                <li>
                  クリスマスモード (イベントモード) があります．クリスマスモードは，クリスマスの楽しさを独自の形で表現した機能です．このモードをオンにすると，12月25日のn日前を「クリスマスイブ…イブ」と表記し，「イブ」の数はn個です．例えば，クリスマスの5日前なら「クリスマスイブイブイブイブイブ」と表示されます．この「イブ」という表現はイブニングという意味ですが，ここでは「前日」と解釈し楽しくアレンジしています．ちなみに，このアイデアは山下達郎の「クリスマスイブ」を聞いたときに思いつきました．
                </li>
              </ul>
              <Image
                src="/assets/react_todo_app.png"
                alt="React Todoアプリの画面"
                width={1706}
                height={948}
                className="project-image"
              />
            </li>
            <li>
              <h3>
                <a href="https://github.com/kk2a/next-blog-app/">
                  2024/12-2025/2 Next.jsを用いた個人ブログアプリ
                </a>
              </h3>
              <p>
                Next.jsを用いた個人ブログ専用のアプリを作成しました．情報科学分野の解説記事を中心とした，カスタマイズ可能な個人ブログプラットフォームです．
              </p>
              <p>
                リポジトリは
                <a href="https://github.com/kk2a/next-blog-app">こちら</a>，実際に動いているアプリは
                <a href="https://kk2a-blog-app-demo.vercel.app/">こちら</a>
                からご覧いただけます．
              </p>
              <h4>主な機能：</h4>
              <ul>
                <li>カバーイメージ，カテゴリ，PDF添付機能付きの記事投稿</li>
                <li>リッチテキストエディタによるHTML形式での執筆支援</li>
                <li>カテゴリ管理機能</li>
                <li>LaTeXで作成した数学的な内容をPDFとして添付可能</li>
              </ul>
              <h4>使用技術：</h4>
              <ul>
                <li>フロントエンド：TypeScript, Next.js 14, React, Tailwind CSS</li>
                <li>バックエンド：Prisma, Supabase (認証・データベース・ストレージ)</li>
                <li>インフラ：Vercel, GitHub Actions</li>
              </ul>
              <p>開発期間：2024.12 ~ 2025.2 (約40時間)</p>
              <ImageGallery>
                <Image src="/assets/next-blog-app/list-view.png" alt="ブログの記事一覧画面" width={1895} height={1511} className="gallery-image" />
                <Image src="/assets/next-blog-app/pdf-upload.png" alt="ブログのPDFアップロード画面" width={1895} height={1858} className="gallery-image" />
              </ImageGallery>
            </li>
          </ol>
        </Section>

        <Section id="links" index="05" title="リンク" description="活動中のアカウント">
          <ul>
            <li>
              <a href="https://github.com/kk2a">GitHub</a>
            </li>
            <li>
              <a href="https://atcoder.jp/users/kk2a">AtCoder</a>
            </li>
            <li>
              <a href="https://mathlog.info/users/1958">Mathlog</a>
            </li>
          </ul>
        </Section>
            </div>
          </div>
        </Container>
      </main>

      <footer className="site-footer">© kk2a</footer>
    </>
  );
}
