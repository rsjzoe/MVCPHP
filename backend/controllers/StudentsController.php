<?php

namespace Controllers;

use Framework\Request;
use Framework\Response;
use Framework\Validator;
use Models\Students;

class StudentsController
{
    public function index(Request $request)
    {
        $students = Students::all();
        return Response::json($students);
    }

    public function store(Request $request)
    {
        $validated = Validator::validate($request->all(),  [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
        ]);
        $task = Students::create($validated);
        return Response::json($task);
    }

    public function update(Request $request, $id)
    {
        $task = Students::find($id);
        $validated = Validator::validate($request->all(),  [
            'first_name' => 'string',
            'last_name' => 'string',
        ]);
        $task->first_name = $validated['first_name'];
        $task->last_name = $validated['last_name'];
        $task->save();

        return Response::json($task);
    }

    public function delete($id)
    {
        $task = Students::find($id);
        $task->delete();

        return Response::json([]);
    }
}
