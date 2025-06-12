<?php

namespace common\components\api\chatGPT;

use yii\helpers\Json;
use yii\httpclient\Client;
use Yii;
use yii\httpclient\CurlTransport;
use yii\log\Logger;

class ChatGPTApiClient extends Client
{
    public string $token;
    public Logger $logger;

    public function init()
    {
        parent::init();
        $this->setTransport(CurlTransport::class);
        $this->logger = Yii::getLogger();
    }

    public function headers(): array
    {
        return [
            'Authorization' => 'Bearer ' . $this->token,
        ];
    }

    public function beforeSend($request)
    {
        $request->setHeaders($this->headers());
        $request->setFormat(self::FORMAT_JSON);

        parent::beforeSend($request);
    }

    public function afterSend($request, $response)
    {
        $this->log($request, $response);
        parent::afterSend($request, $response);
    }

    public function log($request, $response): void
    {
        $headers = $response->getHeaders();

        $this->logger->log([
            'full_url' => $request->getUrl(),
            'url' => $request->getUrl(),
            'created' => date('Y-m-d H:i:s'),
            'request_type' => strtolower($request->getMethod()),
            'request' => is_string($request->getData()),
            'response' => is_string($response->getData()) ? Json::decode($response->getData()) : $response->getContent(),
            'response_code' => $headers->has('http-code') ? $response->getStatusCode() : null,
            'response_time' => $request->responseTime(),
            'command' => Yii::$app->requestedAction->uniqueId ?? Yii::$app->requestedRoute,
        ], Logger::LEVEL_INFO,  'api-chat-gpt');
    }

}