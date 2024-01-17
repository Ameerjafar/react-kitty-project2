export function ParagraphGenerator({setWords}) {
    return (
        <div>
            <h3>para generator</h3>
            <input type = "text" placeholder="Enter your paragraph size"></input>
            <button>Generator</button>
            <p>{setWords}</p>
        </div>
    )
}