import {Modal,useMantineTheme} from "@mantine/core"
import Postshare from "../Share/Postshare";


function Sharemodel({modalopened,setmodalopened}){
    const theme=useMantineTheme();

    return (
        <Modal
        overlayColor={theme.colorScheme==="dark"?theme.colors.dark[9]:theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size="75%"
        opened={modalopened}
        onClose={()=>setmodalopened(false)}
        >
            <Postshare/>
        </Modal>
    )

}

export default Sharemodel;