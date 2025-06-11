<?php

use yii\db\Migration;

class m250609_085827_create_table_article extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%article}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string(1000)->notNull(),
            'content' => $this->text()->notNull(),
            'category_id' => $this->integer()->notNull(),
            'status_id' => $this->integer()->notNull(),
            'reading_time' => $this->string(50)->notNull(),
            'image_path' => $this->string()->notNull(),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
        ]);

        $this->addForeignKey(
            'fk-article-category_id',
            '{{%article}}',
            'category_id',
            '{{%category}}',
            'id',
            'CASCADE',
            'RESTRICT',
        );
        $this->addForeignKey(
            'fk-article-status_id',
            '{{%article}}',
            'status_id',
            '{{%status}}',
            'id',
            'CASCADE',
            'RESTRICT',
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-article-category_id', '{{%article}}');
        $this->dropForeignKey('fk-article-status_id', '{{%article}}');
        $this->dropTable('{{%article}}');
    }

}
