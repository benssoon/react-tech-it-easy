import './Sort.css';

function Sort() {
    function handleClick(buttonText) {
        console.log(buttonText);
    }

    return (
        <article className="sort">
            <button type="button" onClick={() => handleClick("Meest verkocht eerst")}>Meest verkocht eerst</button>
            <button type="button" onClick={() => handleClick("Goedkoopste eerst")}>Goedkoopste eerst</button>
            <button type="button" onClick={() => handleClick("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>
        </article>
    );

}

export default Sort;