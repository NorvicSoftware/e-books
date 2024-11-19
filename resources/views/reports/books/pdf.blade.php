<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>Reporte de libros por author</h2>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Nacionalidad</th>
            <th>Biografia</th>
            <th>Cantidad de libros</th>
        </tr>
        @foreach($authors as $author)
            <tr>
                <td>{{ $author->user->name }}</td>
                <td>{{ $author->nationality }}</td>
                <td>{{ $author->biography }}</td>
                <td>{{ $author->books_count }}</td>
            </tr>
        @endforeach
    </table>
</body>
</html>