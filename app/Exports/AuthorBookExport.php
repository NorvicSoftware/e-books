<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;

class AuthorBookExport implements FromView
{
    public $authors;

    public function __construct($authors)
    {
        $this->authors = $authors;
    }
    /**
     * @return \Illuminate\Support\Collection
     */
    // public function collection()
    // {
    //     //
    // }

    public function view(): View
    {
        return view('reports.books.excel', ['authors' => $this->authors]);
    }
}
