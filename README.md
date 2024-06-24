# Kryteria akceptacji HW10

Utworzono repozytorium ``goit-js-hw-10``.
Zadanie domowe zawiera dwa linki: do plików źródłowych і strony roboczej na ``GitHub Pages``.
Podczas otwierania aktywnej strony zadania w konsoli nie pojawiają się żadne błędy ani ostrzeżenia.
Projekt został utworzony przy użyciu szablonu ``parcel-project-template``.
Kod jest sformatowany przy użyciu ``Prettier``.

## Pliki startowe

[Pobierz pliki startowe](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2FAQA-JS-Files%2Ftree%2Fmaster%2F09%2Fsrc) z podstawowymi znacznikami i stylami zadań. Skopiuj je do swojego projektu, całkowicie zastępując folder ``src`` w [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
Zadanie - wyszukiwanie kraju.
Utwórz front-endową część aplikacji, aby wyszukiwać dane o kraju według jego częściowej lub pełnej nazwy. Obejrzyj film demonstracyjny aplikacji.

## Żądanie HTTP

Użyj publicznego interfejsu API Rest Countries v2, a mianowicie [zasobu name](https://restcountries.com/#api-endpoints-v3-name), który zwraca tablicę obiektów krajów spełniających kryteria wyszukiwania. Minimalnie zaprojektuj wygląd elementów interfejsu.

Napisz funkcję ``fetchCountries(name)``, która wysyła żądanie HTTP do zasobu name і zwraca obietnicę z tablicą krajów jako wynik żądania. Umieść ją w osobnym pliku ``fetchCountries.js`` і utwórz nazwany eksport.

## Filtrowanie pól

Back-end zwraca w odpowiedzi obiekty, których właściwości w większości nie będą Ci potrzebne. Aby zmniejszyć ilość wysyłanych danych, dodaj ciąg parametrów zapytania - w ten sposób back-end zaimplementuje filtrowanie pól. Przeczytaj [dokumentację dotyczącą składni filtrów](https://restcountries.com/#filter-response).

Potrzebujesz tylko następujących właściwości:

``name.official`` - pełna nazwa kraju;
``capital`` - stolica;
``population`` - populacja;
``flags.svg`` - link do obrazu flagi;
``languages`` - tablica języków.

## Pole wyszukiwania

Nazwę kraju do wyszkiwania użytkownik wprowadza w polu tekstowym ``input#search-box``. Żądania HTTP są wykonywane po wprowadzeniu nazwy kraju, czyli na zdarzeniu ``input``. Nie można jednak wykonywać żądania przy każdym naciśnięciu klawisza, ponieważ będzie ich wiele w tym samym czasie i będą wykonywane w nieprzewidywalnej kolejności.

Należy użyć techniki ``Debounce`` w programie obsługi zdarzeń i wykonać żądanie HTTP w czasie ``300ms`` po tym, jak użytkownik przestanie pisać. Użyj [pakietu lodash.debounce](https://www.npmjs.com/package/lodash.debounce).

Jeśli użytkownik całkowicie wyczyści pole wyszukiwania, żądanie HTTP nie zostanie wykonane, a znaczniki listy krajów lub informacji o kraju znikną.

Wyczyść wprowadzony ciąg za pomocą metody ``trim()``. Rozwiąże to problem, gdy w polu wprowadzania znajdują się tylko spacje lub są one na początku i na końcu ciągu.

## Interfejs

Jeśli back-end zwrócił w odpowiedzi więcej niż 10 krajów, interfejs wyświetla komunikat, że nazwa powinna być bardziej specyficzna. Dla komunikatów użyj biblioteki [notiflix](https://github.com/notiflix/Notiflix#readme) і wyświetl następujący tekst: ``"Too many matches found. Please enter a more specific name."``.

Jeśli back-end zwrócił od 2 do 10 krajów, lista znalezionych krajów jest wyświetlana poniżej pola testowego. Każdy element na liście składa się z flagi i nazwy kraju.

Jeśli wynikiem zapytania jest tablica z jednym krajem, interfejs wyświetla zacznik karty z danymi kraju: flagą, nazwą, stolicą, populacją i językami.

## Obsługa błędów

Jeśli użytkownik wprowadzi nazwę kraju, który nie istnieje, back-end zwróci nie pustą tablicę, ale błąd z kodem statusu ``404`` - nie znaleziono. Jeśli nie obsłużysz tego błędu, użytkownik nigdy nie dowe się, że wyszukiwanie się nie powidło. Dodaj komunikat o błędzie ``"Oops, there is no country with that name"`` za pomocą biblioteki [notiflix](https://github.com/notiflix/Notiflix#readme).

