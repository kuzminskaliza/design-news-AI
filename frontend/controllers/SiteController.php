<?php

namespace frontend\controllers;

use common\models\Article;
use common\models\Category;
use Yii;
use yii\captcha\CaptchaAction;
use yii\web\Controller;
use yii\web\ErrorAction;
use yii\web\NotFoundHttpException;

class SiteController extends Controller
{
    public function actionIndex()
    {
        $articles = Article::find()->orderBy(['created_at' => SORT_DESC])->all();
        $categories = Category::find()->all();

        return $this->render('index', [
            'articles' => $articles,
            'categories' => $categories,
        ]);
    }

    public function actionCategory($id)
    {
        $category = Category::findOne($id);
        $articles = Article::find()
            ->where(['category_id' => $category->id])
            ->orderBy(['created_at' => SORT_DESC])
            ->all();

        return $this->render('category/category', [
            'category' => $category,
            'articles' => $articles,
        ]);
    }

    public function actionArticle($id)
    {
        $articles = Article::findOne($id);
        $category = $articles->category;

        return $this->render('article/index', [
            'articles' => $articles,
            'category' => $category,
        ]);
    }

    public function actionAsk()
    {

    }
}
