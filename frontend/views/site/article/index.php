<?php
/** @var common\models\Category $category */
/** @var common\models\Article[] $articles */

/** @var yii\web\View $this */

use yii\helpers\Html;
use yii\helpers\StringHelper;
use yii\helpers\Url;

$this->title = 'Web Design Posts';
?>
<section class="hero-article pt-15 pb-15 border-b border-gray">
    <div class="container">
        <div class="grid grid-cols-12 hero-article">
            <div class="hero-article-image">
                <img src='<?= $articles->image_path ?>'
                     data-spai-egr="1" class="attachment-large size-large rounded-3xl no-lazy"
                     alt="Exciting New Tools for Designers, May 2025" fetchpriority="auto">
            </div>
            <div class="hero-article-info h-full">
                <div class="flex flex-col justify-between h-full">
                    <div class="mb-8">
                        <ul class="flex gap-4 category-items">
                            <li>
                                <a href="<?= Url::to(['site/category', 'id' => $category->id]) ?>">
                                    <span class="font-satoshi bg-neon text-dark font-medium rounded-full py-2 px-6 category-name">
                                        <?= Html::encode($category->name) ?>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <h1 class="font-clash text-[55px] leading-100 text-white font-medium mb-2"><?= $articles->title ?></h1>
                        <div class="font-satoshi excerpt-text leading-140 text-white/70">
                            <p><?= nl2br(Html::encode(StringHelper::truncate($articles->content, 100))) ?></p>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row items-start gap-y-7 md:gap-y-0 md:items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="space-y-2">
                                <p class="font-satoshi text-3 leading-120 font-medium text-white mobile-hidden"> <?= $articles->reading_time ?>
                                    Read</p>
                            </div>
                            <div class="social-share-icons flex items-center justify-end gap-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="single-content pt-15 pb-20">
    <div class="container">
        <div class="grid grid-cols-12 main-article xl:p-[2rem]">
            <div class="col-span-1-12">
                <div class="main-grid-post">
                    <div class="article-wrapper">
                        <div class="article-single text-white/70">
                            <h2 class="wp-block-heading"><?= $articles->title ?></h2>
                            <p><?= $articles->content ?></p>
                            <div class="author-box group">
                                <div class="flex items-center justify-center relative author-avatar">
                                    <div data-spai-bg-prepared="1"
                                         class="flex items-center justify-center rounded-full group-hover:-rotate-180 group-hover:transition-transform duration-700 group-hover:duration-700 height-border-outside"
                                         style="background: linear-gradient(100deg, rgba(228,254,90,1) 0%, rgba(86,214,215,1) 33%, rgba(118,61,181,1) 66%, rgba(239,31,162,1) 100%);"></div>
                                    <div class="flex items-center justify-center bg-dark rounded-full absolute z-20 height-avatar-outside">
                                        <img alt='Carrie Cousins' src='/template/img/chatGPT.svg' class='avatar avatar-96 photo' height='96' width='96' decoding='async'/>
                                    </div>
                                </div>
                                <div class="author-info">
                                    <h2 class="author-name body-sm text-neon uppercase">
                                        <span class="author-link">Written by ChatGPT</span>
                                    </h2>
                                    <div class="author-bio text-white/70">
                                        This article was crafted by ChatGPT, an advanced AI developed by OpenAI.
                                        Drawing from a vast range of up-to-date knowledge, it delivers clear,
                                        insightful, and human-like content to help you stay on top of design
                                        trends and creative strategies
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
