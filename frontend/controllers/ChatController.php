<?php

namespace frontend\controllers;

use Yii;
use yii\web\Controller;
use common\components\api\chatGPT\ChatGPTApiService;

class ChatController extends Controller
{
    public function actionAsk()
    {
        $chatService = Yii::createObject(ChatGPTApiService::class);
        $article = $chatService->generateArticleByCategory();

        if ($article) {
            return $this->asJson([
                'success' => true,
                'article' => [
                    'title' => $article->title,
                    'content' => $article->content,
                    'reading_time' => $article->reading_time,
                ],
            ]);
        }

        return $this->asJson(['success' => false, 'message' => 'Failed to generate article']);
    }
}