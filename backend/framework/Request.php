<?php

namespace Framework;

class Request
{
    private $data;

    public function __construct()
    {
        $this->data = json_decode(file_get_contents('php://input'), true) ?? [];
    }

    public function all()
    {
        return $this->data;
    }

    public function input($key, $default = null)
    {
        return $this->data[$key] ?? $default;
    }
}
