<?php

namespace frontend\controllers;

use common\models\Article;
use common\models\Category;
use yii\data\Pagination;
use yii\web\Controller;

class SiteController extends Controller
{
    public function actionIndex()
    {
        $query = Article::find()->orderBy(['created_at' => SORT_DESC]);

        $pagination = new Pagination([
            'totalCount' => $query->count(),
            'pageSize' => 9,
            'pageParam' => 'page',
            'forcePageParam' => false,
        ]);

        $articles = $query
            ->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();

        $categories = Category::find()->all();

        return $this->render('index', [
            'articles' => $articles,
            'categories' => $categories,
            'pagination' => $pagination,
        ]);
    }

    public function actionCategory($id)
    {
        $category = Category::findOne($id);

        $query = Article::find()
            ->where(['category_id' => $category->id])
            ->orderBy(['created_at' => SORT_DESC]);

        $pagination = new Pagination([
            'totalCount' => $query->count(),
            'pageSize' => 9,
            'pageParam' => 'page',
            'forcePageParam' => false,
        ]);

        $articles = $query
            ->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();

        return $this->render('category/category', [
            'category' => $category,
            'articles' => $articles,
            'pagination' => $pagination,
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
}
