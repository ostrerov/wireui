<?php

namespace WireUi\WireUi\Input;

use WireUi\Support\ComponentPack;

class Borders extends ComponentPack
{
    protected function default(): string
    {
        return config('wireui.input.border') ?? '';
    }

    public function all(): array
    {
        return [
            //
        ];
    }
}
