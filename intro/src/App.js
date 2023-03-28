import {useState} from "react";

function App() {
    const myStyle = {
        border: "1px solid black",
        maxWidth: "350px",
        display: "flex",
        alignItems: "center",
        marginTop: "5px"
    }

    const [deger, setDeger] = useState([]);


    const getOnKeyPress = (e) => {
        if (e.key === "Enter") {
            const todos = callBackStorage();
            todos.push(deger);
            localStorage.setItem("todos", JSON.stringify(todos));
            setDeger("");
        }
    }

   const callBackStorage = () => {
        let todos;

        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        return todos;
    }

    return (

        <div className="d-flex justify-content-center">
            <div>
                <h3 style={
                    {
                        width: "350px",
                        textAlign: "center"
                    }
                }>TODOS</h3>

                <input type="text" className="d-flex" placeholder="Veri Girişi Yapınız"
                    value={deger}
                    onChange={
                        (e) => setDeger(e.target.value)
                    }
                    onKeyPress={getOnKeyPress}
                    style={
                        {
                            width: "350px",
                            height: "40px"
                        }
                    }/>

                <div style={myStyle}>
                    <input type="checkbox"
                        style={
                            {
                                width: "18px",
                                height: "18px"
                            }
                        }
                        className="d-inline ml-2 mr-2"/>
                    <p className="mt-3">lorem optos todos</p>
                </div>
            </div>
        </div>
    )
}

export default App;
