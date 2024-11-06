<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
     <h1>NUEVO LIBRO DISPONIBLE</h1>
     <h3>{{ $book->title }}</h3> 
     <br>
     <p>Estimado {{ $customer->user->name }}</p>
     <p>Le informamos que existe un nuevo libro: <strong>{{ $book->title }}</strong> en la plataforma.</p>
     <p>El costo del libro es de {{ $book->price_sale }}</p>
     <a href="/books">Ver el libro</a>


     <p>Saludos.</p>
</body>
</html>