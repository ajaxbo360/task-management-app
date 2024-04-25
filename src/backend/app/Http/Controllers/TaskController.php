<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $per_page = 10;
        // return TaskResource::collection(
        //     Task::where("user_id", Auth::user()->id)->get()
        // );
        // Get user's tasks
        $tasksQuery = Task::where("user_id", Auth::user()->id);

        // Filtering
        if ($request->has('status')) {
            $tasksQuery->where('status', $request->status);
        }

        // Sorting
        $sortField = $request->input('sort_by', 'due_date');
        // $sortDirection = $request->input('sort_dir', 'asc');

        $tasksQuery->orderBy($sortField);



        // Retrieve tasks
        $tasks = $tasksQuery->get();

        return TaskResource::collection($tasks)->paginate($per_page);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $request->validated($request->all());

        $task = Task::create([
            'user_id' => Auth::user()->id,
            'name' => $request->name,
            'description' => $request->description,
            'due_date' => $request->due_date,
            'status' => $request->status
        ]);
        if ($task) {
            return $this->success([
                'message' => "Task created successfully",
                'success' => true,

            ]);
        }
        return new TaskResource($task);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return $this->isNotAuthorized($task) ? $this->isNotAuthorized($task) : new TaskResource($task);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(StoreTaskRequest $request, Task $task)
    {
        if (Auth::user()->id !== $task->user_id) {
            return $this->error('', 'Unauthorized to update the task', 401);
        }
        if ($task->update($request->all())) {
            return $this->success([
                'message' => "Task updated successfully",
                'success' => true,

            ]);
        }

        return new TaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        return [
            'success' => $this->isNotAuthorized($task)  ? $this->isNotAuthorized($task) : $task->delete($task),
            "message"  => "Task deleted successfully"

        ];
    }

    private function isNotAuthorized($task)
    {
        if (Auth::user()->id !== $task->user_id) {
            return $this->error('', 'Unauthorized to update the task', 401);
        }
    }
}
