<?php
use backend\assets\AdminLteAsset;
use yii\helpers\Html;

AdminLteAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title><?= Html::encode($this->title) ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <?php $this->head() ?>
</head>
<body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
<?php $this->beginBody() ?>
<div class="wrapper">

    <nav class="main-header navbar navbar-expand navbar-dark">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="/index/index" class="nav-link">Home</a>
            </li>
        </ul>
    </nav>

    <aside class="main-sidebar sidebar-dark-primary elevation-4">

        <a href="/article/index" class="brand-link">

            <span class="brand-text font-weight-light" style="text-align: center !important;" >Admin Panel</span>
        </a>

        <div class="sidebar">

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <li class="nav-item">
                        <a href="/article/index" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Article</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/status/index" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Article Status</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/category/index" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Article Category</p>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>

    </aside>

    <div class="content-wrapper">

        <section class="content"><?= $content; ?> </section>

    </div>

    <footer class="main-footer">
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
        </div>
    </footer>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
