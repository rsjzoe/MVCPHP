<?php

namespace Controllers;

use Framework\Request;
use Framework\Response;
use Framework\Validator;
use Models\Task;

class TaskController
{
    public function index(Request $request)
    {
        $tasks = Task::all();
        return Response::json($tasks);
    }

    public function create()
    {
        return Response::views("task/create");
    }

    public function store(Request $request)
    {
        $validated = Validator::validate($request->all(),  [
            'title' => 'required|string|maxlength:255',
            'description' => 'required|string',
        ]);
        $task = Task::create($validated);
        return Response::json($task);        
    }

    public function edit()
    {
        $task = Task::find($_GET['id']);
        return Response::views("task/edit", [
            "task" => $task
        ]);
    }

    public function update()
    {
        $task = Task::find($_POST['id']);
        $task->title = $_POST['title'];
        $task->description = $_POST['description'];
        $task->save();

        return Response::redirect("/tasks");
    }

    public function delete()
    {
        $task = Task::find($_GET['id']);
        $task->delete();

        return Response::redirect("/tasks");
    }
}
