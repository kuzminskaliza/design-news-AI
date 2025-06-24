<?php

namespace backend\controllers;

use Yii;
use yii\web\Controller;

class ArticleController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }

}
