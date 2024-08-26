import {useState} from "react";


function UserPage() {

    const [value, setValue] = useState("")
    const [list, setList] = useState([])

    function getValue (e) {
        setValue(e.target.value)
    }

    function changeList () {
        if(value !==''){
            setList([ value, ...list])
        }
    }

    function changeUser (idx) {
        if (value !==''){
            list[idx]=value
            setList([...list])
        }
    }

    return (
        <div>
            <input onInput={getValue} type="text" placeholder="user"/>
            <button onClick={changeList}>добавить</button>
            <div>
                {
                    list.length === 0 ? <p>список пуст</p> :

                    <ul>
                        {
                            list.map((el, index) => <div key={index}>
                                <li>{el}</li>
                                <button onClick={() => changeUser(index)}>поменять</button>
                            </div>
                            )
                        }
                    </ul>
                }
            </div>
        </div>
    );
}

export default UserPage;