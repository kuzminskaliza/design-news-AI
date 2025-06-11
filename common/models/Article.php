<?php

namespace common\models;

use yii\db\ActiveQuery;
use yii\db\ActiveRecord;

/**
 * @property int $id
 * @property string $title
 * @property string $content
 * @property int $category_id
 * @property int $status_id
 * @property string $reading_time
 * @property string $image_path
 * @property string $created_at
 * @property string $updated_at
 */
class Article extends ActiveRecord
{
    public static function tableName()
    {
        return '{{%article}}';
    }

    public function rules()
    {
        return [
            [['title', 'content', 'category_id', 'status_id', 'reading_time', 'image_path'], 'required'],
            [['content'], 'string'],
            [['category_id', 'status_id'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['title', 'image_path'], 'string', 'max' => 255],
            [['reading_time'], 'string', 'max' => 50],
            [['category_id'], 'exist', 'skipOnError' => true,
                'targetClass' => Category::class, 'targetAttribute' => ['category_id' => 'id']],
            [['status_id'], 'exist', 'skipOnError' => true,
                'targetClass' => Status::class, 'targetAttribute' => ['status_id' => 'id']],
        ];
    }

    public function  getCategory(): ActiveQuery
    {
        return $this->hasOne(Category::class, ['id' => 'category_id']);
    }

    public function getStatus(): ActiveQuery
    {
        return $this->hasOne(Status::class, ['id' => 'status_id']);
    }

}