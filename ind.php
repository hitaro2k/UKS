<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <nav>
    <a href="/">Главная</a>
    <a href="/item.php?name=Влад">Влад</a>
    <a href="/item.php?name=Андрей">Андрей</a>
  </nav>
  <div id="app">
    <h1>Главная страница</h1>
    <p>Нажмите на имя, чтобы передать его на страницу товара.</p>
  </div>

  <script>
    const navLinks = document.querySelectorAll('nav a');
    const appDiv = document.getElementById('app');

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const name = link.textContent;
        appDiv.innerHTML = `<p>Вы выбрали: ${name}</p>`;
      });
    });
  </script>
</body>
</html>
