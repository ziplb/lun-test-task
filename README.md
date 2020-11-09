# Детали реализации тестового задания

К сожалению, хостинг от гитхаба накладывает некоторые ограничения. Поэтому все проекты лежат на одном домене, а дифференцируются уже по названию проекта, которое идет сразу за доменным именем:
https://{username}.github.io/{project-name}.

Исходя из этого, прошу вас работать с этой ссылкой, как если бы она вся представляла собой домен. Например, чтобы проверить, происходит ли редирект со страницы просмотра результата на страницу анкеты в случае, когда она (анкета) не заполнена, нужно использовать такую ссылку:
https://ziplb.github.io/lun-test-task/overview, а не такую: https://ziplb.github.io/overview

**Upd.** Я еще раз проанализировал свое решение, а также собрал фидбек от знакомых, которых ранее попросил протестировать проект. Исходя из полученной информации я внес некоторое правки и улучшения. Список изменений можно посмотреть [здесь](updates.md)

### 1. Пагинация по шагам при помощи роутинга

У меня был выбор - сделать пагинацию при помощи роутинга или хранить состояние прогресса внутри приложения. Я остановился на первом варианте потому, что для перехода к предыдущему шагу пользователь наверняка захочет использовать для навигации кнопку "Назад" на телефона/в браузере. Также я считаю, что такой вариант более очевидный и более простой в реализации.

### 2. Переполнения карточки результата текстом

Я предусмотрел вариант переполнения карточки результата. Текст, который имеет больший размер, чем колонка контента(слева), будет обрезаться с троеточием в конце. Для того, чтобы проверить это, введите очень длинную ссылку на 3 шаге(соцсети).

### 3. Финальный вид картинок

Картинки были достаточно большими и тяжелыми, поэтому я обрезал и немного сжал их. При это учитывал размер картинок для ретины. Также, я обрезал их с соотношением сторон 1:1(квадрат), чтобы смотрелось красиво. Но при этом, даже если использовать не квадратную картинку, она подстроится подстроится под квадратный контейнер, масштабируется и будет смотрется хорошо.

### 4. Storybook

Для проектирования и разработки компонентов я использовал storybook. Чтобы запустить проект и просмотреть всю галлерею, нужно выполнить следующую команду: `yarn storybook`.

### 5. Возможность менять шаги местами

Я реализовал возможность менять шаги местами без переписывания логики. Последовательность шагов можно задать в файле `./src/data` в константе `stepInOrderList`.

### 6. Перемешивание опций на шаге выбора любимого котика

При каждом новом прохождении анкеты опции животных на шаге выбора любимого котика имеют случайный порядок.

### 7. Placeholder в полях для ввода соцсетей(3-й шаг) отличается от того, который нарисован в дизайне

Фраза "Ваша страница в ..." была достаточно длинной и иногда не помещалась(в случае с Одноклассниками). Поэтому я несколько изменил ее и теперь она выглядит так: "Вы в ..."

### 8. Смена названия сайта(= текста на вкладке)

В зависимости от того, на какой стадии находится пользователь(заполнение анкеты или просмотр результата), сайт имеет различное название.
