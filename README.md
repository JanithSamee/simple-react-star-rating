# Simple React Star Rating

The typical rating star component with number indicator.

# Install

```bash
npm install simple-react-star-rating
```

## With number indicator

![star-rating](/_images/rating_with_number.png)

## Without number indicator

![star-rating](/_images/rating_without_number.png)

## Examples

```js
import StarRating from "./StarRating/StarRating";

function App() {
    return (
        <div>
            <StarRating showNumaric={true} size="16pt" value={3}></StarRating>
        </div>
    );
}

export default App;
```

## Properties

| Properties  |     Type      |   default   | Description                                 |
| :---------- | :-----------: | :---------: | :------------------------------------------ |
| readOnly    | **`boolean`** | **`false`** | Only shows the value and can not be changed |
| disabled    | **`boolean`** | **`false`** | Read only and opasity will 0.7              |
| value       | **`number`**  |   **`0`**   | The value should be a displayed             |
| numOfStars  | **`number`**  |   **`5`**   | Number of stars in the component            |
| size        | **`string`**  | **`24pt`**  | The size of the component in `px` or `pt`   |
| showNumaric | **`boolean`** | **`true`**  | Show or hide the Number indicator           |
