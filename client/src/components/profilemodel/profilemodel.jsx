import {Modal,useMantineTheme} from "@mantine/core"


function Profilemodal({modalopened,setmodalopened}){
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
            <form className="infoform">
                <h3>Your Info</h3>

                <div>
                    <input type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="infoinput" />

                    <input type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="infoinput" />
                </div>

                <div>
                    <input type="text"
                    name="worksat"
                    placeholder="Works at"
                    className="infoinput" />
                </div>

                <div>
                    <input type="text"
                    name="livesin"
                    placeholder="Lives in"
                    className="infoinput" />

                    <input type="text"
                    name="country"
                    placeholder="Country"
                     className="infoinput" />

                </div>

                <div>
                    <input type="text"
                    name="relationshipstatus"
                    placeholder="Relationship Status"
                    className="infoinput" />
                </div>

                <div>
                    Profile Image
                    <input type="file" name="profileimage"/>
                    Cover Image
                    <input type="file" name="coverimage"/>
                </div>

                <button className="button info-button">
                    Update
                </button>

            </form>
        </Modal>
    )

}

export default Profilemodal;