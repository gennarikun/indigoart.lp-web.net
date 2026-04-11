<!-- ======================= ACCESS ======================= -->
<section id="anc_09" class="section">
  <div class="container fade-in">
    <div class="section-label">ACCESS</div>
    <h2 class="section-title">体験の開催場所・アクセス</h2>
    
    <div class="access-card">
      <div class="access-card-header">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <h3>染物体験教室 インディゴ高菜先生</h3>
      </div>
      <div class="access-card-body">
        <table class="access-info-table">
          <tr>
            <td>住所</td>
            <td>〒401-0301<br>山梨県南都留郡富士河口湖町船津3250-3</td>
          </tr>
          <tr>
            <td>駐車場</td>
            <td>無料駐車場有（店舗前・観光バス可）</td>
          </tr>
          <tr>
            <td>予約</td>
            <td>予約優先制（前日までのご予約をおすすめします）</td>
          </tr>
          <tr>
            <td>予約可能時間</td>
            <td>AM 10:00〜17:00</td>
          </tr>
          <tr>
            <td>定休日</td>
            <td>不定休</td>
          </tr>
          <tr>
            <td>催行人数</td>
            <td>1名〜20名</td>
          </tr>
          <tr>
            <td>最寄駅</td>
            <td>富士急行線河口湖駅（徒歩12分）</td>
          </tr>
        </table>
        <iframe class="access-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d775.1549715324162!2d138.76800850374636!3d35.4925292582425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2e5dd60f9ad483e!2z5pyN5p-T5L2T6aiT5pWZ5a6k44OX44Op44Oz44OE44Kv44Op44OV44OI!5e0!3m2!1sja!2sjp!4v1670156959432!5m2!1sja!2sjp" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</section>

<!-- ======================= CTA ======================= -->
<?php if (empty($hideCTA)): ?>
<section class="cta-section">
  <div class="container fade-in">
    <div class="cta-text">
      <span style="display:inline-block;">お申込み</span> <span style="display:inline-block;">24時間受け付けております</span>
    </div>
    <div class="cta-sub">
      <span style="display:inline-block;">WEB予約・LINE・</span><span style="display:inline-block;">お電話にてご予約を承ります</span>
    </div>
    <a href="<?= $basePath ?>contact/" class="btn-cta" style="font-size:18px; padding:20px 48px; line-height: 1.5;">
      <span style="display:inline-block;">お問い合わせもこちら</span> <span style="display:inline-block;">お気軽にご相談ください</span>
    </a>
  </div>
</section>
<?php endif; ?>

<!-- ======================= FOOTER ======================= -->
<footer class="site-footer">
  <div class="container">
    <nav class="footer-nav">
      <a href="<?= $basePath ?>">TOP</a>
      <a href="<?= $basePath ?>up-cycle/">洋服染め直し</a>
      <a href="<?= $basePath ?>gallery/">ギャラリー</a>
      <a href="<?= $basePath ?>about-class/">染物体験</a>
      <a href="<?= $basePath ?>online-shop/">ショップ</a>
      <a href="<?= $basePath ?>price/">料金表</a>
      <a href="<?= $basePath ?>question/">よくある質問</a>
      <a href="<?= $basePath ?>contact/">ご予約・お問い合わせ</a>
    </nav>
    <div class="footer-copy">Copyright &copy; インディゴ高菜先生 All Rights Reserved.</div>
  </div>
</footer>

<!-- Remove original included footer scripts that might interfere, or selectively include them if needed -->
<!-- Removed wp_footer() to fix Fatal Error in static PHP environment -->
