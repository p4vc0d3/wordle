<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TryCat</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="//unpkg.com/alpinejs" defer></script>
</head>

<body>
    <main x-data="game" @keyup.window="onKeyPress($event.key)">
        <div id="game">
            <template x-for="row in board">
                <div class="row">
                    <template x-for="tile in row">
                        <div class="tile" x-text="tile.letter"></div>
                    </template>
                </div>
            </template>
        </div>
        <output x-text="message"></output>
    </main>
</body>

</html>