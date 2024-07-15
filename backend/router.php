<?php

use Controllers\StudentsController;
use Controllers\TaskController;
use Framework\Router;

$router = new Router();

$router->get('/', [TaskController::class, 'index']);
$router->get('/tasks', [TaskController::class, 'index']);
$router->get('/tasks/create', [TaskController::class, 'create']);
$router->post('/tasks', [TaskController::class, 'store']);
$router->get('/tasks/edit', [TaskController::class, 'edit']);
$router->post('/tasks/{task}', [TaskController::class, 'update']);
$router->get('/tasks/delete', [TaskController::class, 'delete']);

$router->get('/students', [StudentsController::class, 'index']);
$router->post('/students', [StudentsController::class, 'store']);
$router->post('/students/{id}', [StudentsController::class, 'update']);
$router->get('/students/delete/{id}', [StudentsController::class, 'delete']);

$router->handle();

