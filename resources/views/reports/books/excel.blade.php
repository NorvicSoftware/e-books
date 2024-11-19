<table>
    <tr>
        <th style="background: #d8310d">Nombre</th>
        <th style="background: #d8310d">Nacionalidad</th>
        <th style="background: #d8310d">fecha nacimiento</th>
        <th style="background: #d8310d">Biografia</th>
        <th style="background: #d8310d">Sitio web</th>
        <th style="background: #d8310d">Cantidad de libros</th>
    </tr>
    @foreach($authors as $author)
        <tr>
            <td>{{ $author->user->name }}</td>
            <td>{{ $author->nationality }}</td>
            <td>{{ $author->birth_date }}</td>
            <td>{{ $author->biography }}</td>
            <td>{{ $author->website }}</td>
            <td>{{ $author->books_count }}</td>
        </tr>
    @endforeach
</table>
