<?php

use yii\db\Migration;

class m250609_084851_create_table_status extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%status}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
        ]);

        $this->batchInsert('{{%status}}', ['name'], [
            ['draft'],
            ['published'],
            ['rejected'],
        ]);

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%status}}');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m250609_084851_create_table_status cannot be reverted.\n";

        return false;
    }
    */
}
