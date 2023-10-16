import React, {useState} from "react"

export default function NumberSelector(props) {
    const { minValue, maxValue, defaultValue } = props;

    const [selectedNumber, setSelectedNumber] = useState(defaultValue);

    const incrementNumber = () => {
      if (selectedNumber < maxValue) {
        setSelectedNumber(selectedNumber + 1);
      }
    };
  
    const decrementNumber = () => {
      if (selectedNumber > minValue) {
        setSelectedNumber(selectedNumber - 1);
      }
    };

    const numbersToDisplay = [selectedNumber - 1, selectedNumber, selectedNumber + 1].filter(
        (number) => number >= minValue && number <= maxValue
    );

    return(
        <section className="container-units-selector">
            <a className="anchor" onClick={decrementNumber}>
                <svg className="selector-icon" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="-2 -2 44 44">
                    < rect x="5" y="5" width="30" height="30" fill="var(--BAUHAUS-YELLOW, #FFBC00)" transform="rotate(45 20 20)" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none", position: "absolute", top: "23.5%", left: "21.5%" }} width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g>
                        <path d="M5.91797 13.252V11.252H19.918V13.252H5.91797Z" fill="#F7F7F7" />
                    </g>
                </svg>
            </a>
            <section className="units-numbers">
                {numbersToDisplay.map((number) => (
                    <p
                        key={number}
                        style={{
                            color: "var(--BAUHAUS-BLUE, #005AAB)",
                            padding: "10px 10px",
                            fontWeight: number === selectedNumber ? "700" : "normal",
                            userSelect: "none"
                        }}
                        className="sizes-text"
                    >
                        {number}
                    </p>
                ))}
            </section>
            <a className="anchor" onClick={incrementNumber}>
                <svg className="selector-icon" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="-2 -2 44 44">
                    < rect x="5" y="5" width="30" height="30" fill="var(--BAUHAUS-YELLOW, #FFBC00)" transform="rotate(45 20 20)" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none", position: "absolute", top: "23.5%", left: "24%" }} width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g>
                    <path d="M11 13.252H5V11.252H11V5.25195H13V11.252H19V13.252H13V19.252H11V13.252Z" fill="#F7F7F7"/>
                    </g>
                </svg>
            </a>
        </section>
    )
}