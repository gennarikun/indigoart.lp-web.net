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
        <li>
          <a href="<?= $basePath ?>">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1"/></svg>
            <span>TOP</span>
          </a>
        </li>
        <li>
          <a href="<?= $basePath ?>up-cycle/">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
            <span>洋服染め直し</span>
          </a>
          <ul class="sub-menu gap-bridge">
            <li><a href="<?= $basePath ?>blog/">ブログ</a></li>
          </ul>
        </li>
        <li>
          <a href="<?= $basePath ?>gallery/">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            <span>ギャラリー</span>
          </a>
        </li>
        <li>
          <a href="<?= $basePath ?>about-class/">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            <span>染物体験</span>
          </a>
          <ul class="sub-menu gap-bridge">
            <li><a href="<?= $basePath ?>about-indigo/">藍染めについて</a></li>
            <li><a href="<?= $basePath ?>silkscreen/">藍染×シルクスクリーン</a></li>
            <li><a href="<?= $basePath ?>pumice/">甲州ワイン染めについて</a></li>
            <li><a href="<?= $basePath ?>item/">染物素材のご紹介</a></li>
          </ul>
        </li>
        <li>
          <a href="<?= $basePath ?>online-shop/">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            <span>ショップ</span>
          </a>
        </li>
        <li>
          <a href="<?= $basePath ?>price/">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
            <span>料金表</span>
          </a>
        </li>
        <li>
          <a href="<?= $basePath ?>question/">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span>よくある質問</span>
          </a>
        </li>
        <li>
          <a href="<?= $basePath ?>contact/">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8l9 6 9-6"/></svg>
            <span>ご予約・お問い合わせ</span>
          </a>
        </li>
      </ul>
    </nav>
    <button class="mobile-menu-btn" aria-label="モバイルメニューを開く">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="mobile-nav-overlay">
  <nav>
    <a href="<?= $basePath ?>">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1"/></svg>
      TOP
    </a>
    <a href="<?= $basePath ?>up-cycle/">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
      洋服染め直しサービス
    </a>
    <a href="<?= $basePath ?>blog/" style="padding-left: 50px; font-size: 16px;">- ブログ</a>
    <a href="<?= $basePath ?>gallery/">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      ギャラリー
    </a>
    <a href="<?= $basePath ?>about-class/">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
      染物体験
    </a>
    <a href="<?= $basePath ?>about-indigo/" style="padding-left: 50px; font-size: 16px;">- 藍染めについて</a>
    <a href="<?= $basePath ?>silkscreen/" style="padding-left: 50px; font-size: 16px;">- 藍染×シルクスクリーン</a>
    <a href="<?= $basePath ?>pumice/" style="padding-left: 50px; font-size: 16px;">- 甲州ワイン染めについて</a>
    <a href="<?= $basePath ?>item/" style="padding-left: 50px; font-size: 16px;">- 染物素材のご紹介</a>
    <a href="<?= $basePath ?>online-shop/">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      ショップ
    </a>
    <a href="<?= $basePath ?>price/">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
      料金表
    </a>
    <a href="<?= $basePath ?>question/">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      よくある質問
    </a>
    <a href="<?= $basePath ?>contact/">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8l9 6 9-6"/></svg>
      ご予約・お問い合わせ
    </a>
  </nav>
</div>
