<?php

use frontend\assets\AppAsset;
use yii\helpers\Html;
use yii\helpers\Url;

/** @var common\models\Article[] $articles */


AppAsset::register($this);

?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= Html::encode($this->title) ?></title>
    <?= Html::csrfMetaTags() ?>
    <?php $this->head() ?>

    <link rel="preload" href="<?= Url::to('@web/template/fonts/Morganite-SemiBold-1.woff', true) ?>" as="font" type="font/woff" crossorigin>
    <link rel="stylesheet" href="<?= Url::to('@web/template/css/style.css', true) ?>">
    <link rel="icon" type="image/x-icon" href="<?= Url::to('@web/template/img/logo-block.svg', true) ?>">
    <link rel="stylesheet" href="<?= Url::to('@web/template/css/adthrive.css', true) ?>">
    <link rel="stylesheet" href="<?= Url::to('@web/template/css/wpcf7-form.css', true) ?>" media="all">
    <link rel="stylesheet" href="<?= Url::to('@web/template/css/custom.css', true) ?>" media="all">
</head>
<body class="home wp-singular page-template page-template-template-home-new page-template-template-home-new-php page page-id-60473 wp-theme-webdesigndepot bg-dark light-mode no-sidebar">
<?php $this->beginBody() ?>

<nav class="mobile-fixed bg-dark w-full z-[60] py-4 border-b border-gray">
    <div class="container">
        <div class="flex items-center justify-between">
            <a href="<?= Url::to(['site/index']) ?>">
                <img src="<?= Url::to('@web/template/img/logo-block.svg') ?>" alt="Home" id="logo">
            </a>
            <ul class="xl:flex items-center gap-8 hidden">
                <li>
                    <a class="menu-animation text-white hover:text-neon font-medium"
                       href="<?= Url::to(['site/category', 'id' => '1']) ?>">
                        <span>UX Design</span>
                    </a>
                </li>
                <li>
                    <a class="menu-animation text-white hover:text-neon font-medium"
                       href="<?= Url::to(['site/category', 'id' => '2']) ?>">
                        <span>UI Design</span>
                    </a>
                </li>
                <li>
                    <a class="menu-animation text-white hover:text-neon font-medium"
                       href="<?= Url::to(['site/category', 'id' => '3']) ?>">
                        <span>Trends 2025</span>
                    </a>
                </li>
                <li>
                    <a class="menu-animation text-white hover:text-neon font-medium"
                       href="<?= Url::to(['site/category', 'id' => '4']) ?>">
                        <span>Tutorials</span>
                    </a>
                </li>
                <li>
                    <form role="search" method="get" class="search-form" action="">
                        <div class="search-wrapper">
                            <div class="input-holder">
                                <input type="text" class="search-input" placeholder="Type to search" name="s"/>
                                <button class="search-icon" aria-label="Search WDD">
                                    <img src="<?= Url::to('@web/template/img/search.svg') ?>" alt="search">
                                </button>
                            </div>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    </div>
</nav>

<?= $content ?>

<section class="border-y border-gray pb-10 pt-10">
    <div class="container">
        <div class="grid grid-cols-8">
            <div class="col-span-8 xl:col-span-4">
                <div id="subscribe-footer-new" class="text-subscribe-footer-new">
                    <?php foreach (str_split('SUBSCRIBE') as $letter): ?>
                        <span class="text-10 md:text-[120px] lg:text-[224px] leading-100 text-neon uppercase"<?= $letter === 'E' ? ' style="margin-right: 15px;"' : '' ?>><?= $letter ?></span>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="col-span-8 lg:col-span-6 xl:col-span-4 subs-desc">
                <div class="space-y-6 xl:pl-[72px]">
                    <h4 class="font-clash text-[20px] lg:text-[28px] font-medium text-white">
                        Join to our thriving community of like-minded creatives!
                    </h4>
                    <form id="emailyard-subscribe-form" class="flex flex-col gap-4">
                        <input type="hidden" id="emailyard_nonce" name="emailyard_nonce" value="4c0aaa3531"/>
                        <input type="hidden" name="_wp_http_referer" value="/"/>
                        <div class="flex items-center gap-4 w-full">
                            <input type="email" name="email" id="emailyard-email"
                                   class="w-full bg-[#1c1c1c] text-white/60 font-medium focus-visible:outline-none rounded-full py-4 px-6"
                                   placeholder="Your email address" required>
                            <button type="submit" id="emailyard-subscribe-button"
                                    class="flex-shrink-0 btn btn-primary btn-subscribe">
                                <span class="button-text">Subscribe</span>
                            </button>
                        </div>
                        <div id="emailyard-email-error" class="text-red-500 text-sm hidden text-neon"></div>
                    </form>
                    <div id="emailyard-subscribe-message" class="text-white"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer>
    <div class="border-gray py-16">
        <div class="container footer-container">
            <div class="component-links">
                <div class="grid"><h4 class="font-satoshi font-medium uppercase text-neon">Categories</h4>
                    <ul class="category-items flex items-center justify-center">
                        <li>
                            <a class="menu-animation text-white/70 hover:text-neon uppercase"
                               href ="<?= Url::to(['site/category', 'id' => '1']) ?>">
                                <span>UX Design</span>
                            </a>
                        </li>
                        <li>
                            <a class="menu-animation text-white/70 hover:text-neon uppercase"
                               href="<?= Url::to(['site/category', 'id' => '2']) ?>">
                                <span>UI Design</span>
                            </a>
                        </li>
                        <li>
                            <a class="menu-animation text-white/70 hover:text-neon uppercase"
                               href="<?= Url::to(['site/category', 'id' => '3']) ?>">
                                <span>Trends 2025</span>
                            </a>
                        </li>
                        <li>
                            <a class="menu-animation text-white/70 hover:text-neon uppercase"
                               href="<?= Url::to(['site/category', 'id' => '4']) ?>">
                                <span>Tutorials</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="grid menu-grid">
                    <ul class="menu-items flex items-center justify-center">
                        <li><img src="<?= Url::to('@web/template/img/telegram.svg') ?>" alt="telegram"></li>
                        <li><img src="<?= Url::to('@web/template/img/facebook.svg') ?>" alt="facebook"></li>
                        <li><img src="<?= Url::to('@web/template/img/instagram.svg') ?>" alt="instagram"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
<script src="<?= Url::to('@web/template/js/main.js') ?>"></script>
<script src="<?= Url::to('@web/template/js/spai_js.js') ?>"></script>
<script src="<?= Url::to('@web/template/js/disable_ads.js') ?>"></script>
<script src="<?= Url::to('@web/template/js/gsap.min.js') ?>"></script>
<script src="<?= Url::to('@web/template/js/autoptimize_single_94ac09bc4a9eabdfbf0afaf60df33046.js') ?>"></script>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
