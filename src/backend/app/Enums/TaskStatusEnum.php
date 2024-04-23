<?php

namespace App\Enums;

enum TaskStatusEnum: string
{
    case InProgress = 'In Progress';
    case Completed = 'Completed';
}
