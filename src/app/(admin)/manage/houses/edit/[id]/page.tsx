import ManageHouseCreate from "@/pages-fsd/manageHouseCreate/ui/ManageHouseCreate";


type PropsType = {
    params: Promise<{ id: string }>
}
const Page = async (props: PropsType) => {
    const { id } = await props.params

    return (
        <ManageHouseCreate houseId={Number(id)}/>
    );
};

export default Page;