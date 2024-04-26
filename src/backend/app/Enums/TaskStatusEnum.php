<?php

namespace App\Enums;

enum TaskStatusEnum: string
{
    case New = 'New';
    case InProgress = 'In Progress';
    case Completed = 'Completed';
}
