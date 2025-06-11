<?php

namespace frontend\controllers;

use common\models\Article;
use common\models\Category;
use Yii;
use yii\captcha\CaptchaAction;
use yii\web\Controller;
use yii\web\ErrorAction;
use yii\web\NotFoundHttpException;

/**
 * Site controller
 */
class SiteController extends Controller
{

    public function actions()
    {
        return [
            'error' => [
                'class' => ErrorAction::class,
            ],
            'captcha' => [
                'class' => CaptchaAction::class,
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }



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
        if (!$category) {
            throw new NotFoundHttpException("Category not found");
        }

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
        if (!$articles) {
            throw new NotFoundHttpException("Article not found");
        }
        $category = $articles->category;

        return $this->render('article/index', [
            'articles' => $articles,
            'category' => $category,
        ]);
    }
}
