<?php

namespace common\components\api\chatGPT;

use common\models\Article;
use Exception;
use Yii;

class ChatGPTApiService implements ChatGPTEndpointConstInterface
{
    public ChatGPTApiClient $client;

    public function __construct()
    {
        $this->client = Yii::$app->chatGPT;
    }

    public function sendMessage(string $message, string $model = 'gpt-3.5-turbo'): ?array
    {
        try {
            $response = $this->client->createRequest()
                ->setMethod('POST')
                ->setUrl(self::CHAT_GPT_API_URL)
                ->setData([
                    'model' => $model,
                    'messages' => [
                        ['role' => 'system', 'content' => 'You are a visionary design journalist known for bold and unconventional ideas.'],
                        ['role' => 'user', 'content' => $message],
                    ],
                    'temperature' => 1.2,
                ])
                ->send();

            if ($response->isOk) {
                return $response->data;
            }
            Yii::error('ChatGPT error: ' . $response->content, __METHOD__);
        } catch (Exception $e) {
            Yii::error('ChatGPT request exception: ' . $e->getMessage(), __METHOD__);
        }
        return null;
    }

    public function generateArticleByCategory(): ?Article
    {
        $categories = [
            1 => 'UX Design',
            2 => 'UI Design',
            3 => 'Trends 2025',
            4 => 'Tutorials'
        ];
        $categoryId = array_rand($categories);
        $categoryName = $categories[$categoryId];

        $titlePrompt = "Invent a highly original, unique, and imaginative article title about {$categoryName}. Avoid clichés and common patterns. Up to 100 characters, no repeats.";
        $title = $this->content($this->sendMessage($titlePrompt));

        $articlePrompt = "Write an interesting article for designers on the topic: \"{$title}\". Structure it with subheadings. Up to 10000 characters";
        $content = $this->content($this->sendMessage($articlePrompt));

        $readingPrompt = "Estimate how many minutes it takes to read the following article:\n\n{$content}";
        $reading = $this->content($this->sendMessage($readingPrompt));

        if (preg_match('/\d+/', $reading, $matches)) {
            $reading = $matches[0] . ' min';
        } else {
            $reading = '5 min';
        }

        $article = Yii::createObject(Article::class);
        $article->title = $title;
        $article->content = $content;
        $article->category_id = $categoryId;
        $article->status_id = 1;
        $article->reading_time = $reading;
        $article->image_path = '/template/img/uiDesign/34.jpeg';

        if (!$article->save()) {
            Yii::error("Failed to save article: " . json_encode($article->errors), __METHOD__);
            return null;
        }

        return $article;
    }

    public function content($response)
    {
        return $response['choices'][0]['message']['content'];
    }

}