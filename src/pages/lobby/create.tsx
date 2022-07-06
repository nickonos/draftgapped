import {NextPage} from "next";

import {ChangeEvent, useState} from "react";

const CreateLobby : NextPage = () => {

    const [player2, setPlayer2] = useState(false)
    const [time, setTime] = useState(true)
    const [drafts, setDrafts] = useState(1)

    const onClick = () => {
        console.log(`drafts: ${drafts}, time: ${time}, player2: ${player2}`)

    }

    const onChangeDrafts = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(e.target.valueAsNumber)) {
            let value = e.target.valueAsNumber;
            if (value >= 5) {
                setDrafts(5)
                e.target.value = "5"
            } else if (value <= 1) {
                setDrafts(1)
                e.target.value = "1"
            } else {
                setDrafts(value)
                e.target.value = value.toString()
            }
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div className={"text-4xl bold text-blue-400 pb-8"}>
                Create your lobby
            </div>
            <form
                className="w-1/4 flex flex-col items-center bg-[#011638] drop-shadow-lg text-lg text-white rounded-md">
                <div className={"w-full p-5"}>
                    <label htmlFor={"drafts"}>Amount of drafts :</label>
                    <input
                        type={"number"}
                        className={"float-right text-black text-md text-center rounded-md w-10"}
                        defaultValue={drafts}
                        id="drafts"
                        onChange={onChangeDrafts}
                    />
                </div>
                <div className={"w-full p-5"}>
                    <label htmlFor={"player"}>Play with another player :</label>
                    <input type={"checkbox"}
                           defaultChecked={player2}
                           className={"float-right w-5 h-5 rounded-md"}
                           id="player"
                           onChange={e => setPlayer2(e.target.checked)}
                    />
                </div>
                <div className={"w-full p-5"}>
                    <label htmlFor={"time"}> Play with time :</label>
                    <input type={"checkbox"}
                           defaultChecked={time}
                           className={"float-right w-5 h-5 rounded-md"}
                           id={"time"}
                           onChange={e => setTime(e.target.checked)}
                    />
                </div>
                <a
                    className="rounded-xl px-4 py-2 mb-4 bg-blue-500 hover:bg-blue-600 w-fit"
                    onClick={onClick}
                >
                    Start
                </a>
            </form>
        </div>
    )
}
export default CreateLobby