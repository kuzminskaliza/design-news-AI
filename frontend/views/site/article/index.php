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
                <img src="/template/img/imageForHeader.svg"
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
<!--<section class="related-content">-->
<!--    <div class="container">-->
<!--        <div class="grid grid-cols-12 post-related-header">-->
<!--            <div class="col-span-12">-->
<!--                <h2 class="text-neon font-medium related-title font-clash">Read Next</h2>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="grid grid-cols-12 gap-8">-->
<!--            <div class="col-span-12 md:col-span-6 xl:col-span-4 mobile-hidden">-->
<!--                <article-->
<!--                        class="article-box w-full relative article-gradient h-full border border-lighter-gray rounded-3xl js-article-link"-->
<!--                        data-href="#">-->
<!--                    <div class="article-box-border h-full w-full rounded-3xl">-->
<!--                        <div class="article-box-inside-border rounded-3xl bg-dark"></div>-->
<!--                    </div>-->
<!--                    <div class="article-box-content small-box h-full bg-article-gradient h-full flex flex-col justify-between rounded-3xl space-y-4">-->
<!--                        <div class="space-y-4"><a-->
<!--                                    href="#"-->
<!--                                    class="image-feature w-full h-[240px] rounded-3xl"> <img-->
<!--                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDY4MiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNjgyIiBkYXRhLXU9Imh0dHBzJTNBJTJGJTJGd2ViZGVzaWduZXJkZXBvdC13cC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbSUyRjIwMjUlMkYwMyUyRjI2MjI1NzU4JTJGMS00MC0xMDI0eDY4Mi5qcGciIGRhdGEtdz0iMTAyNCIgZGF0YS1oPSI2ODIiIGRhdGEtYmlwPSIiPjwvc3ZnPg=="-->
<!--                                        data-spai="1"-->
<!--                                        class="attachment-large size-large w-full h-full object-cover rounded-3xl"-->
<!--                                        alt="Mastering Multimodal UX: Best Practices for Seamless User Interactions"-->
<!--                                        fetchpriority="auto"> <span-->
<!--                                        class="h-full w-full image-feature-overlay object-cover rounded-3xl"></span>-->
<!--                            </a>-->
<!--                            <div>-->
<!--                                <a href="#"-->
<!--                                   class="inline-block"><h3 href="#"-->
<!--                                                            class="font-clash text-6 header-animation small-rectangle font-medium leading-120">-->
<!--                                        Mastering Multimodal UX: Best Practices for Seamless User Interactions</h3></a>-->
<!--                                <p class="text-white/70 font-medium mt-5 text-[17px] leading-140"> We all know the-->
<!--                                    feeling: you’re in the middle of an interaction, your app is humming along-->
<!--                                    beautifully, and then—bam!—you&#8230;</p></div>-->
<!--                        </div>-->
<!--                        <div class="flex items-center justify-between">-->
<!--                            <div class="flex items-center space-x-3"><a-->
<!--                                        href="#"-->
<!--                                        class="author-link leading-120 text-[13px]"><span-->
<!--                                            class="body-sm text-neon uppercase font-medium text-[13px]">Noah Davis</span></a>-->
<!--                                <span class="font-satoshi text-[13px] font-medium uppercase text-white/50 mobile-hidden">June 4, 2025</span>-->
<!--                                <span class="font-satoshi text-[13px] font-medium uppercase text-white/50 only-mobile">Jun 4, 2025</span>-->
<!--                            </div>-->
<!--                            <a href="#"-->
<!--                               class="more-arrow inline-block bg-neon rounded-full p-2"-->
<!--                               aria-label="Read more Mastering Multimodal UX: Best Practices for Seamless User Interactions">-->
<!--                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--                                     xmlns="http://www.w3.org/2000/svg">-->
<!--                                    <path d="M6.99902 17L16.999 6.99997M16.999 6.99997V17M16.999 6.99997H6.99902"-->
<!--                                          stroke="#1F1F1F" stroke-width="2" stroke-linecap="square"/>-->
<!--                                </svg>-->
<!--                            </a></div>-->
<!--                    </div>-->
<!--                </article>-->
<!--            </div>-->
<!---->
<!--            <div class="col-span-12 md:col-span-6 xl:col-span-4 mobile-hidden">-->
<!--                <article-->
<!--                        class="article-box w-full relative article-gradient h-full border border-lighter-gray rounded-3xl js-article-link"-->
<!--                        data-href="#">-->
<!--                    <div class="article-box-border h-full w-full rounded-3xl">-->
<!--                        <div class="article-box-inside-border rounded-3xl bg-dark"></div>-->
<!--                    </div>-->
<!--                    <div class="article-box-content small-box h-full bg-article-gradient h-full flex flex-col justify-between rounded-3xl space-y-4">-->
<!--                        <div class="space-y-4"><a-->
<!--                                    href="#"-->
<!--                                    class="image-feature w-full h-[240px] rounded-3xl"> <img-->
<!--                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDU3NiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNTc2IiBkYXRhLXU9Imh0dHBzJTNBJTJGJTJGd2ViZGVzaWduZXJkZXBvdC13cC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbSUyRjIwMjUlMkYwNSUyRjIwMTMxNDA0JTJGMzQucG5nLTEwMjR4NTc2LndlYnAiIGRhdGEtdz0iMTAyNCIgZGF0YS1oPSI1NzYiIGRhdGEtYmlwPSIiPjwvc3ZnPg=="-->
<!--                                        data-spai="1"-->
<!--                                        class="attachment-large size-large w-full h-full object-cover rounded-3xl"-->
<!--                                        alt="OpenAI Codex: Revolutionizing Code or Ripping Off Developers?"-->
<!--                                        fetchpriority="auto"> <span-->
<!--                                        class="h-full w-full image-feature-overlay object-cover rounded-3xl"></span>-->
<!--                            </a>-->
<!--                            <div>-->
<!--                                <a href="#"-->
<!--                                   class="inline-block"><h3 href="#"-->
<!--                                                            class="font-clash text-6 header-animation small-rectangle font-medium leading-120">-->
<!--                                        OpenAI Codex: Revolutionizing Code or Ripping Off Developers?</h3></a>-->
<!--                                <p class="text-white/70 font-medium mt-5 text-[17px] leading-140"> OpenAI’s Codex has-->
<!--                                    officially hit the scene today, promising to transform the way we write code. OpenAI&#8217;s-->
<!--                                    Codex is a&#8230;</p></div>-->
<!--                        </div>-->
<!--                        <div class="flex items-center justify-between">-->
<!--                            <div class="flex items-center space-x-3"><a-->
<!--                                        href="#"-->
<!--                                        class="author-link leading-120 text-[13px]"><span-->
<!--                                            class="body-sm text-neon uppercase font-medium text-[13px]">Noah Davis</span></a>-->
<!--                                <span class="font-satoshi text-[13px] font-medium uppercase text-white/50 mobile-hidden">May 20, 2025</span>-->
<!--                                <span class="font-satoshi text-[13px] font-medium uppercase text-white/50 only-mobile">May 20, 2025</span>-->
<!--                            </div>-->
<!--                            <a href="#"-->
<!--                               class="more-arrow inline-block bg-neon rounded-full p-2"-->
<!--                               aria-label="Read more OpenAI Codex: Revolutionizing Code or Ripping Off Developers?">-->
<!--                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--                                     xmlns="http://www.w3.org/2000/svg">-->
<!--                                    <path d="M6.99902 17L16.999 6.99997M16.999 6.99997V17M16.999 6.99997H6.99902"-->
<!--                                          stroke="#1F1F1F" stroke-width="2" stroke-linecap="square"/>-->
<!--                                </svg>-->
<!--                            </a></div>-->
<!--                    </div>-->
<!--                </article>-->
<!--            </div>-->
<!--            <div class="col-span-12 md:col-span-6 xl:col-span-4 mobile-hidden">-->
<!--                <article-->
<!--                        class="article-box w-full relative article-gradient h-full border border-lighter-gray rounded-3xl js-article-link"-->
<!--                        data-href="#">-->
<!--                    <div class="article-box-border h-full w-full rounded-3xl">-->
<!--                        <div class="article-box-inside-border rounded-3xl bg-dark"></div>-->
<!--                    </div>-->
<!--                    <div class="article-box-content small-box h-full bg-article-gradient h-full flex flex-col justify-between rounded-3xl space-y-4">-->
<!--                        <div class="space-y-4"><a-->
<!--                                    href="#"-->
<!--                                    class="image-feature w-full h-[240px] rounded-3xl"> <img-->
<!--                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDU2MyIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNTYzIiBkYXRhLXU9Imh0dHBzJTNBJTJGJTJGd2ViZGVzaWduZXJkZXBvdC13cC5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbSUyRjIwMjUlMkYwMyUyRjE5MjAxODM2JTJGMS0yNS0xMDI0eDU2My5qcGciIGRhdGEtdz0iMTAyNCIgZGF0YS1oPSI1NjMiIGRhdGEtYmlwPSIiPjwvc3ZnPg=="-->
<!--                                        data-spai="1"-->
<!--                                        class="attachment-large size-large w-full h-full object-cover rounded-3xl"-->
<!--                                        alt="Is Thinking Outside the Box Still Possible in a Cancel Culture World?"-->
<!--                                        fetchpriority="auto"> <span-->
<!--                                        class="h-full w-full image-feature-overlay object-cover rounded-3xl"></span>-->
<!--                            </a>-->
<!--                            <div>-->
<!--                                <a href="#"-->
<!--                                   class="inline-block"><h3 href="#"-->
<!--                                                            class="font-clash text-6 header-animation small-rectangle font-medium leading-120">-->
<!--                                        Is Thinking Outside the Box Still Possible in a Cancel Culture World?</h3></a>-->
<!--                                <p class="text-white/70 font-medium mt-5 text-[17px] leading-140"> In today’s world,-->
<!--                                    where political correctness, cancel culture, and instant online feedback shape every-->
<!--                                    conversation, one thing is clear: the&#8230;</p></div>-->
<!--                        </div>-->
<!--                        <div class="flex items-center justify-between">-->
<!--                            <div class="flex items-center space-x-3"><a-->
<!--                                        href="#"-->
<!--                                        class="author-link leading-120 text-[13px]"><span-->
<!--                                            class="body-sm text-neon uppercase font-medium text-[13px]">Louise North</span></a>-->
<!--                                <span class="font-satoshi text-[13px] font-medium uppercase text-white/50 mobile-hidden">May 19, 2025</span>-->
<!--                                <span class="font-satoshi text-[13px] font-medium uppercase text-white/50 only-mobile">May 19, 2025</span>-->
<!--                            </div>-->
<!--                            <a href="#"-->
<!--                               class="more-arrow inline-block bg-neon rounded-full p-2"-->
<!--                               aria-label="Read more Is Thinking Outside the Box Still Possible in a Cancel Culture World?">-->
<!--                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--                                     xmlns="http://www.w3.org/2000/svg">-->
<!--                                    <path d="M6.99902 17L16.999 6.99997M16.999 6.99997V17M16.999 6.99997H6.99902"-->
<!--                                          stroke="#1F1F1F" stroke-width="2" stroke-linecap="square"/>-->
<!--                                </svg>-->
<!--                            </a></div>-->
<!--                    </div>-->
<!--                </article>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</section>-->
