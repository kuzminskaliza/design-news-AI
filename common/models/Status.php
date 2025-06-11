<?php

namespace common\models;

use yii\db\ActiveRecord;

class Status extends ActiveRecord
{
    public static function tableName()
    {
        return '{{%status}}';
    }

    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name'], 'string', 'max' => 255],
            [['name'], 'unique'],
        ];
    }

    public function getArticles()
    {
        return $this->hasMany(Article::class, ['status_id' => 'id']);
    }
}