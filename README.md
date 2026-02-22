## Real DOM vs Virtual DOM | React vs JavaScript

* This project shows the difference between Real DOM (Vanilla JS) and Virtual DOM (React) using a simple Card component.

### 🔵 Real DOM | Vanilla JavaScript

* We manually create and update elements using createElement() and appendChild(). It directly updates the actual browser DOM whenever changes happen.

    
    ```
    const root = document.getElementById("root");

    const card = document.createElement("div");
    const title = document.createElement("h2");
    const button = document.createElement("button");

    title.innerText = "Real DOM Card";
    button.innerText = "Click Me";

    button.addEventListener("click", () => {
        title.innerText = "Updated using Real DOM";
    });

    card.appendChild(title);
    card.appendChild(button);
    root.appendChild(card);
    ```

### ⚛️ Virtual DOM | React

* React uses state and JSX. It compares changes in a Virtual DOM before updating the real DOM. React updates only the changed part instead of re-rendering the full UI.

    
    ```
    import { useState } from "react";

    function Card() {
        const [title, setTitle] = useState("Virtual DOM Card");

        return (
            <div>
                <h2>{title}</h2>
                <button onClick={() => setTitle("Updated using Virtual DOM")}>
                    Click Me
                </button>
            </div>
        );
    }

    export default Card;
    ```