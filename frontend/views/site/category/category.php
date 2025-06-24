<?php

/** @var yii\web\View $this */
/** @var common\models\Category $category */

/** @var common\models\Article[] $articles */

use yii\helpers\Html;
use yii\helpers\StringHelper;
use yii\helpers\Url;
use yii\widgets\LinkPager;

$this->title = 'Web Design Posts';
?>

<section class="category-section border-b border-gray pt-0 pb-10 md:pt-0 md:pb-1">
    <div class="container">
        <div class="grid grid-cols-8 gap-8">
            <div class="col-span-8">
                <div>
                    <h1 id="header-category-animation" class="text-neon uppercase category-animation">
                        <?= Html::encode(strtoupper($category->name)) ?>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="border-b border-gray py-8 section-article-featured">
    <div class="container">
        <div class="grid grid-cols-12 gap-8">
            <?php foreach ($articles as $article): ?>
                <div class="col-span-12 md:col-span-6 xl:col-span-4 mobile-hidden">
                    <article
                            class="article-box w-full relative article-gradient h-full border border-lighter-gray rounded-3xl js-article-link"
                            data-href="<?= Html::encode(Url::to(['site/article', 'id' => $article->id])) ?>">
                        <div class="article-box-border h-full w-full rounded-3xl">
                            <div class="article-box-inside-border rounded-3xl bg-dark"></div>
                        </div>
                        <div class="article-box-content small-box h-full bg-article-gradient h-full flex flex-col justify-between rounded-3xl space-y-4">
                            <div class="space-y-4">
                                <a href="<?= Html::encode(Url::to(['site/article', 'id' => $article->id])) ?>"
                                   class="image-feature w-full h-[240px] rounded-3xl">
                                    <img src='<?= $article->image_path ?>'
                                         alt="<?= Html::encode($article->title) ?>"
                                         class="attachment-large size-large w-full h-full object-cover rounded-3xl"
                                         loading="lazy">
                                    <span class="h-full w-full image-feature-overlay object-cover rounded-3xl"></span>
                                </a>
                                <div>
                                    <a href="<?= Html::encode(Url::to(['site/article', 'id' => $article->id])) ?>"
                                       class="inline-block">
                                        <h3 class="font-clash text-6 header-animation small-rectangle font-medium leading-120">
                                            <?= Html::encode($article->title) ?>
                                        </h3>
                                    </a>
                                    <p class="text-white/70 font-medium mt-5 text-[17px] leading-140">
                                        <?= nl2br(Html::encode(StringHelper::truncate($article->content, 100))) ?>
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-3">
                                    <a href="#" class="author-link leading-120 text-[13px]">
                                        <span class="body-sm text-neon uppercase font-medium text-[13px]">
                                            <?= Html::encode($category->name) ?>
                                        </span>
                                    </a>
                                    <span class="font-satoshi text-[13px] font-medium uppercase text-white/50 mobile-hidden">
                                        <?= Yii::$app->formatter->asDate($article->created_at, 'php:F j, Y') ?>
                                    </span>
                                </div>
                                <a href="<?= Html::encode(Url::to(['site/article', 'id' => $article->id])) ?>"
                                   class="more-arrow inline-block bg-neon rounded-full p-2"
                                   aria-label="Read more <?= Html::encode($article->title) ?>">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99902 17L16.999 6.99997M16.999 6.99997V17M16.999 6.99997H6.99902"
                                              stroke="#1F1F1F" stroke-width="2" stroke-linecap="square"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            <?php endforeach; ?>

            <div class="col-span-12">
                <div class="pagination pagination-home">
                    <?= LinkPager::widget([
                        'pagination' => $pagination,
                        'options' => ['class' => 'pagination pagination-home'],
                        'linkContainerOptions' => ['tag' => 'li'],
                        'linkOptions' => ['class' => 'page-numbers', 'data-google-interstitial' => 'false'],
                        'activePageCssClass' => 'current',
                        'disabledPageCssClass' => 'disabled',
                        'prevPageLabel' => false,
                        'nextPageLabel' => 'Next Page',
                        'nextPageCssClass' => 'btn-next',
                    ]) ?>
                </div>
            </div>
        </div>
    </div>
</section>
