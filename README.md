# Przytul-Emocje



## Technologie i frameworki

- React

- JS

- Sass

- Hooks

- React Router

- Modal React

- Grid

- Vitejs

  

## Przegląd projektu

Aplikacja jest stworzona dla osób biorących udział w sesji z psychobiologiem. Funkcjonalności aplikacji to formularz kontaktowy, możliwość dodawania, usuwania i edytowania notatek oraz blog.

#### Strona startowa:

Strona startowa jest to menu składające sie z linków (wykrzystałam do tego NavLink z react-router-dom) do poszczególnych funkcjonalości aplikacji. Layout został w grid/siatka css, dzięki, której widok dostosowany jest do różnych wielkości monitorów. 

#### Formularz:

Do zbudowania formularza kontaktowego został użyty Hook useState, a dzięki walidacji odbiorca danych z formularza otrzyma tylko te prawidłowe.

#### Notatnik:

Notatnik posiada funckyjności takie jak: dodawanie nowej notatki, usuwanie istniejącej notatki, edytowanie istniejącej notatki.

Główny komponent został zbudowany przy użyciu komponentu klasowego, w którym został uwzględniony construktor przyjmujący propsy. Pozostałe podkomponenty zbutowane zostały przy użyciu komponentów funkcyjnych z użyciem Hooków.

#### Blog:

Składa się z kart, funkcji, która przyjmuje odpowiednie propsy, dla każego wpisu. Karty rozmieszczone są za pomocą Grida, dzieki czemu widok dopasowuje się do wielkości monitorów, jak i do ilości artykłów.

## Instalacja

git clone https://github.com/SylwiaMacieja/Przytul-Emocje.git
npm install
npm run dev



## Kontakt

sylwia.macieja@gmail.com







