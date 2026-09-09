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

function SkillCard({
  title,
  summary,
  tags,
}: {
  title: string;
  summary: string;
  tags: string[];
}) {
  return (
    <Card className="skill-card">
      <Heading as="h3" size="4">
        {title}
      </Heading>
      <Text as="p" size="2" color="gray" className="skill-summary">
        {summary}
      </Text>
      <Flex gap="2" wrap="wrap" className="skill-tags">
        {tags.map((tag) => (
          <Badge key={tag} color="gray" variant="soft">
            {tag}
          </Badge>
        ))}
      </Flex>
    </Card>
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
                  大阪公立大学高専 5年 / 筑波大学数学類 進学予定
                </Text>
                <Separator size="4" my="5" />
                <nav aria-label="ページ内ナビゲーション" className="rail-nav">
                  <a href="#about"><span>01</span> 自己紹介</a>
                  <a href="#activities"><span>02</span> スキル</a>
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
              <Section
                id="about"
                index="01"
                title="自己紹介"
                description="数学とプログラミングを軸に、実装と探究を続けています"
              >
                <p>大阪公立大学高専に通っている5年生です．卒業後は筑波大学数学類に進学予定です．</p>
                <p>
                  プログラミングと数学が好きです．数学では代数学や競技プログラミングに取り組み、
                  プログラミングではWebアプリケーションやCLIツールを作っています．
                </p>
                <p>
                  数学の記事やノートは
                  <a href="https://math.kk2a.net">math.kk2a.net</a>
                  にまとめています．
                </p>
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

              <Section
                id="activities"
                index="02"
                title="スキル"
                description="主要な技術と、それを支える開発環境・ワークフロー"
              >
                <Flex direction="column" gap="6">
                  <Card className="math-focus-card">
                    <Flex direction="column" gap="2">
                      <Badge color="violet" variant="soft" className="card-kicker">
                        MATHEMATICS
                      </Badge>
                      <Heading as="h3" size="5">数学</Heading>
                      <Text as="p" size="2" color="gray">
                        代数学や競技プログラミングの数学的な部分が好きです．LaTeX / LuaLaTeXも使えます．
                        <MathFormula formula="\mathbf{F}_2" /> の行列などを題材に、
                        <a href="https://math.kk2a.net">math.kk2a.net</a> や
                        <a href="https://mathlog.info/users/1958">Mathlog</a>を更新しています．
                      </Text>
                    </Flex>
                  </Card>

                  <div className="skill-group">
                    <Flex align="center" gap="3" className="skill-group-heading">
                      <Badge color="cyan" variant="soft">PRIMARY</Badge>
                      <Heading as="h3" size="4">主要項目</Heading>
                    </Flex>
                    <div className="skill-grid">
                      <SkillCard
                        title="C++ / Competitive Programming"
                        summary="競技プログラミングを通じて、アルゴリズムとデータ構造を実装しています．"
                        tags={["AtCoder Algorithm Yellow", "Library Checker 100+", "C++"]}
                      />
                      <SkillCard
                        title="Rust"
                        summary="個人開発で、CLIツールや画像・PDF処理ツールを作っています．"
                        tags={["個人開発", "CLI", "画像・PDF処理"]}
                      />
                      <SkillCard
                        title="TypeScript / React / Next.js / Node.js"
                        summary="実務1年以上．Web UI、コンポーネント設計、Full Stack開発まで一通り扱います．"
                        tags={["Web UI", "Full Stack", "App Router", "Web Backend"]}
                      />
                      <SkillCard
                        title="Python / Machine Learning"
                        summary="機械学習や画像処理の実習・開発で使用しています．"
                        tags={["Supervised Learning", "Fine-tuning", "Image Processing"]}
                      />
                    </div>
                  </div>

                  <div className="skill-group">
                    <Flex align="center" gap="3" className="skill-group-heading">
                      <Badge color="gray" variant="soft">SUPPORT</Badge>
                      <Heading as="h3" size="4">補助項目</Heading>
                    </Flex>
                    <div className="skill-grid skill-grid--support">
                      <SkillCard
                        title="Git / GitHub / GitHub Actions"
                        summary="チーム開発の基本として、PR・Code Review・CI/CDを運用しています．"
                        tags={["Team Development", "PR", "Code Review", "CI/CD", "Test Automation"]}
                      />
                      <SkillCard
                        title="Docker / Docker Compose"
                        summary="開発環境や複数サービスを再現可能なコンテナとして管理します．"
                        tags={["Development Environment", "Container"]}
                      />
                      <SkillCard
                        title="Codex / Claude Code"
                        summary="AIを実装・レビューの相棒として活用し、設計から検証まで進めます．"
                        tags={["AI-driven Development", "Implementation", "Review"]}
                      />
                    </div>
                  </div>

                  <Card className="evidence-card">
                    <Flex align="center" justify="between" gap="3">
                      <Text size="1" weight="bold" color="cyan" className="card-kicker">
                        ACTIVITY SNAPSHOT
                      </Text>
                      <a href="https://atcoder.jp/users/kk2a">AtCoderプロフィール ↗</a>
                    </Flex>
                    <ImageGallery>
                      <Image
                        src="/assets/blue_coder_kk2.png"
                        alt="AtCoderで青色になった時の記念スクリーンショット"
                        width={1190}
                        height={875}
                        className="achievement-image"
                      />
                      <Image
                        src="/assets/fastest.png"
                        alt="形式的冪級数ライブラリのベンチマーク結果"
                        width={1427}
                        height={602}
                        className="achievement-image"
                      />
                    </ImageGallery>
                  </Card>
                </Flex>
              </Section>

              <Section
                id="experience"
                index="03"
                title="経験"
                description="チームでの開発、コンテスト、数学セミナー"
              >
                <div className="experience-list">
                  <article className="experience-card experience-card--highlight">
                    <Badge color="amber" variant="soft">最優秀賞</Badge>
                    <h3>第1回 さくらの AI ハッカソン with Kloud</h3>
                    <p>「AI幼馴染が音声で起こしてくれる」というコンセプトのスマホアプリを制作しました．</p>
                    <ul>
                      <li>担当：プロジェクトマネージャー</li>
                      <li>最優秀賞を受賞</li>
                    </ul>
                    <Image
                      src="/assets/sakura-ai-hackathon-okosite.png"
                      alt="AI幼馴染が音声で起こしてくれるスマホアプリの画面"
                      width={1200}
                      height={839}
                      className="experience-image"
                    />
                  </article>
                  <article className="experience-card experience-card--highlight">
                    <Badge color="cyan" variant="soft">Kloudハッカソン #6</Badge>
                    <h3>日記を歌に変えて思い出を振り返るプロダクト</h3>
                    <p>生成AIを用いて、日々の日記を歌に変えて思い出を振り返るプロダクトを作りました．</p>
                    <ul>
                      <li>プロダクト名：Audimori</li>
                      <li>担当：Reactを用いたフロントエンド</li>
                    </ul>
                    <Image
                      src="/assets/kloud-hackathon-6-audimori.png"
                      alt="Audimoriの日記から歌を作る画面"
                      width={1920}
                      height={1148}
                      className="experience-image"
                    />
                  </article>
                  <article>
                    <Badge color="violet" variant="soft">AtCoder</Badge>
                    <h3>第六回日本最強プログラマー学生選手権～Advance～</h3>
                    <p>予選を通過して本選に参加しました．結果は振るいませんでしたが、オンサイトの競技に挑戦しました．</p>
                  </article>
                  <article>
                    <Badge color="violet" variant="soft">AtCoder</Badge>
                    <h3>AtCoder × Engineer Guild オンサイトコンテスト ～集結！高レート人材</h3>
                    <p>予選を通過してオンサイトコンテストに参加しました．</p>
                  </article>
                  <article>
                    <Badge color="gray" variant="soft">JOI 2024/2025</Badge>
                    <h3>日本情報オリンピック</h3>
                    <ul>
                      <li>一次予選：400点（Aランク）</li>
                      <li>二次予選：400点（Aランク）</li>
                      <li>本選：265点（Bランク）</li>
                    </ul>
                  </article>
                  <article>
                    <Badge color="gray" variant="soft">JMO 夏季セミナー 2023</Badge>
                    <h3>数学セミナーでの論文発表</h3>
                    <p>
                      一般応募枠で<a href="https://github.com/kk2a/jmoss2023/blob/main/paper.pdf">論文</a>を提出し、
                      <a href="https://github.com/kk2a/jmoss2023/blob/main/presentation.pdf">発表</a>も行いました．
                    </p>
                    <p>ルベーグ積分の30講（志賀 浩二）を読みました．</p>
                  </article>
                </div>
              </Section>

              <Section
                id="projects"
                index="04"
                title="プロダクト"
                description="興味から始めて、実際に作ったもの"
              >
                <ol className="project-list">
                  <li>
                    <h3>
                      <a href="https://github.com/kk2a/kk2a-blog">kk2a-blog</a>
                    </h3>
                    <p>
                      Next.js / TypeScript / MDXで作った個人ブログです．記事のメタデータやtopicsをCloudflare D1で管理し、
                      静的サイトとWorker APIを組み合わせています．
                    </p>
                    <Flex gap="2" wrap="wrap">
                      <Badge color="cyan" variant="soft">Next.js</Badge>
                      <Badge color="cyan" variant="soft">D1</Badge>
                      <Badge color="cyan" variant="soft">MDX</Badge>
                    </Flex>
                  </li>
                  <li>
                    <h3>
                      <a href="https://github.com/kk2a/cpp-run">Rust製CLIツール群</a>
                    </h3>
                    <p>
                      C++のコンパイル・実行を補助する<a href="https://github.com/kk2a/cpp-run">cpp-run</a>、
                      ソースコードをまとめる<a href="https://github.com/kk2a/cpp-bundle">cpp-bundle</a>、
                      データ構造を実装する<a href="https://github.com/kk2a/b-tree">b-tree</a>などを作っています．
                    </p>
                    <Flex gap="2" wrap="wrap">
                      <Badge color="orange" variant="soft">Rust</Badge>
                      <Badge color="orange" variant="soft">CLI</Badge>
                      <Badge color="orange" variant="soft">個人開発</Badge>
                    </Flex>
                  </li>
                  <li>
                    <h3>
                      <a href="https://github.com/kk2a/library">競プロライブラリ</a>
                    </h3>
                    <p>
                      競技プログラミングで使うアルゴリズム・データ構造をC++で実装しています．
                      <MathFormula formula="\mathbf{F}_2" /> の行列や形式的冪級数などを扱っています．
                    </p>
                    <Flex gap="2" wrap="wrap">
                      <Badge color="violet" variant="soft">C++</Badge>
                      <Badge color="violet" variant="soft">Algorithm</Badge>
                      <Badge color="violet" variant="soft">Data Structure</Badge>
                    </Flex>
                  </li>
                  <li>
                    <h3>
                      <a href="https://github.com/kk2a/kosensai2-I-B">2023 高専祭 / Pyxelゲーム</a>
                    </h3>
                    <p>
                      6人チームで広告に出てくるゲーム（通称：数字タワー）を制作しました．
                      デザイン以外の部分を主に担当しました．
                    </p>
                    <a className="project-image-link" href="https://github.com/kk2a/kosensai2-I-B">
                      <Image
                        src="/assets/kuso_game.png"
                        alt="高専祭で制作した数字タワーゲームの画面"
                        width={1593}
                        height={1012}
                        className="project-image"
                      />
                    </a>
                  </li>
                </ol>
              </Section>

              <Section id="links" index="05" title="リンク" description="活動中のアカウントとサイト">
                <ul>
                  <li><a href="https://github.com/kk2a">GitHub</a></li>
                  <li><a href="https://atcoder.jp/users/kk2a">AtCoder</a></li>
                  <li><a href="https://math.kk2a.net">math.kk2a.net</a></li>
                  <li><a href="https://mathlog.info/users/1958">Mathlog</a></li>
                  <li><a href="https://github.com/kk2a/kk2a-blog">kk2a-blog</a></li>
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
