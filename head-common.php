<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8"/>
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta content="max-image-preview:large" name="robots"/>
<!-- Google tag (gtag.js) -->
<script async="" src="https://www.googletagmanager.com/gtag/js?id=AW-775206818">
</script>
<style id="custom-background-css" type="text/css">
		:root { --washi-texture: url('/assets/7966bae7.png'); }
		body.custom-background {
			background-image: url('/assets/7966bae7.png');
			background-position: left top;
			background-size: auto;
			background-repeat: repeat;
			background-attachment: scroll;
		}
	</style>
<!-- Meta Pixel Code -->
<!-- End Meta Pixel Code -->
<link href="<?= $basePath ?>assets/33152662.png" rel="icon" sizes="32x32"/>
<link href="<?= $basePath ?>assets/065cc1bd.png" rel="icon" sizes="192x192"/>
<link href="<?= $basePath ?>assets/36b0842c.png" rel="apple-touch-icon"/>
<meta content="<?= $basePath ?>assets/d6b26641.png" name="msapplication-TileImage"/>
<link href="<?= $basePath ?>css/style.css?v=<?= time() ?>" media="all" rel="stylesheet" type="text/css"/>
<?php
// 各ページの固有CSSを読み込む
if (isset($pageCSS) && is_array($pageCSS)) {
    foreach ($pageCSS as $css) {
        echo '<link href="' . $basePath . htmlspecialchars($css) . '" media="all" rel="stylesheet" type="text/css"/>' . "\n";
    }
}
?>
<!-- Custom Redesign Styles & Scripts -->
<script src="<?= $basePath ?>js/script.js?v=20260408_02"></script>
