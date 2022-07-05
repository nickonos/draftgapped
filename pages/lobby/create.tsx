import {NextPage} from "next";
import DraftsForm from "../../components/DraftsForm";


const CreateDraft : NextPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div className={"text-4xl bold text-blue-400 pb-8"}>
                Create your lobby
            </div>
            <DraftsForm />
        </div>
    )
}
export default CreateDraft