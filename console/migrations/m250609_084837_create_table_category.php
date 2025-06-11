<?php

use yii\db\Migration;

class m250609_084837_create_table_category extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%category}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
        ]);

        $this->batchInsert('{{%category}}', ['name'] ,[
            ['UX Design'],
            ['UI Design'],
            ['Trends 2025'],
            ['Tutorial'],
        ]);

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%category}}');
    }

}
