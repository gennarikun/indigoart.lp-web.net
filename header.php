<!-- SVG Filters for Dye Bleed Effects -->
<svg width="0" height="0" style="position: absolute; width: 0; height: 0; overflow: hidden;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="bleed-filter" x="-20%" y="-20%" width="140%" height="140%">
      <!-- Large scale noise for big organic drops -->
      <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" result="displaced" />
      <!-- Blur coordinates into a soft gradient -->
      <feGaussianBlur in="displaced" stdDeviation="3" result="blurred" />
      <!-- Sharpen the blur into a rough, torn-paper ink edge -->
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -4" in="blurred" result="goo" />
      <!-- Merge with the displaced graphic for texture -->
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
  </defs>
</svg>

<!-- ======================= HEADER ======================= -->
<header class="site-header">
  <div class="header-inner">
    <div class="header-logo">
      <a href="<?= $basePath ?>">
        <img alt="インディゴ高菜先生" src="<?= $basePath ?>assets/2f075b4d.png"/>
      </a>
    </div>
    <nav class="header-nav">
      <ul>
        <li><a href="<?= $basePath ?>">TOP</a></li>
        <li>
          <a href="<?= $basePath ?>up-cycle/">洋服染め直しサービス</a>
          <ul class="sub-menu gap-bridge">
            <li><a href="<?= $basePath ?>blog/">ブログ</a></li>
          </ul>
        </li>
        <li><a href="<?= $basePath ?>gallery/">ギャラリー</a></li>
        <li>
          <a href="<?= $basePath ?>about-class/">染物体験</a>
          <ul class="sub-menu gap-bridge">
            <li><a href="<?= $basePath ?>about-indigo/">藍染めについて</a></li>
            <li><a href="<?= $basePath ?>silkscreen/">藍染×シルクスクリーン</a></li>
            <li><a href="<?= $basePath ?>pumice/">甲州ワイン染めについて</a></li>
            <li><a href="<?= $basePath ?>item/">染物素材のご紹介</a></li>
          </ul>
        </li>
        <li><a href="<?= $basePath ?>online-shop/">ショップ</a></li>
        <li><a href="<?= $basePath ?>price/">料金表</a></li>
        <li><a href="<?= $basePath ?>question/">よくある質問</a></li>
        <li><a href="<?= $basePath ?>contact/">ご予約・お問い合わせ</a></li>
      </ul>
    </nav>
    <button class="mobile-menu-btn" aria-label="モバイルメニューを開く">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="mobile-nav-overlay">
  <nav>
    <a href="<?= $basePath ?>">TOP</a>
    <a href="<?= $basePath ?>up-cycle/">洋服染め直しサービス</a>
    <a href="<?= $basePath ?>blog/" style="padding-left: 30px; font-size: 16px;">- ブログ</a>
    <a href="<?= $basePath ?>gallery/">ギャラリー</a>
    <a href="<?= $basePath ?>about-class/">染物体験</a>
    <a href="<?= $basePath ?>about-indigo/" style="padding-left: 30px; font-size: 16px;">- 藍染めについて</a>
    <a href="<?= $basePath ?>silkscreen/" style="padding-left: 30px; font-size: 16px;">- 藍染×シルクスクリーン</a>
    <a href="<?= $basePath ?>pumice/" style="padding-left: 30px; font-size: 16px;">- 甲州ワイン染めについて</a>
    <a href="<?= $basePath ?>item/" style="padding-left: 30px; font-size: 16px;">- 染物素材のご紹介</a>
    <a href="<?= $basePath ?>online-shop/">ショップ</a>
    <a href="<?= $basePath ?>price/">料金表</a>
    <a href="<?= $basePath ?>question/">よくある質問</a>
    <a href="<?= $basePath ?>contact/">ご予約・お問い合わせ</a>
  </nav>
</div>
