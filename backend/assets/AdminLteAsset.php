<?php

namespace backend\assets;

use yii\web\AssetBundle;

class AdminLteAsset extends AssetBundle
{
    public $sourcePath = '@vendor/almasaeed2010/adminlte';

    public $css = [
        'dist/css/adminlte.min.css',
        'plugins/fontawesome-free/css/all.min.css',
        'plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
        'plugins/select2/css/select2.min.css',
        'plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css',
    ];

    public $js = [
        'plugins/jquery/jquery.min.js',
        'plugins/bootstrap/js/bootstrap.bundle.min.js',
        'plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
        'dist/js/adminlte.js',
        'plugins/select2/js/select2.full.min.js',
    ];

    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap4\BootstrapAsset',
    ];
}