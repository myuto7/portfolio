import { NextPage } from "next";
import { dataset, Header, WorkList } from "../compornents";

const WorkPage: NextPage = () => {
    return (
        <>
            <Header></Header>
            <WorkList works={dataset.works} />
        </>
    )
}

export default WorkPage