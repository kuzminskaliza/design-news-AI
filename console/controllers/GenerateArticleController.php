<?php

namespace console\controllers;

use common\components\api\chatGPT\ChatGPTApiService;
use Yii;
use yii\console\Controller;

class GenerateArticleController extends Controller
{

    public function actionRun()
    {
        file_put_contents(
            __DIR__ . '/../../frontend/runtime/logs/article-generator.log',
            date('Y-m-d H:i:s') . " — Cron job started\n",
            FILE_APPEND
        );

        $chatService = Yii::createObject(ChatGPTApiService::class);
        $article = $chatService->generateArticleByCategory();

        if ($article) {
            echo 'Article generated!' . PHP_EOL;
            echo 'title:  ' . $article->title . PHP_EOL;
        } else {
            echo 'Article not found!' . PHP_EOL;
        }
    }


}