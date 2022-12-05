import { StyledContainer } from "./setup/styled-components/styled_component";
import GlobalStyle from "./setup/styled-components/GlobalStyle";
//import sub app header module federation
// import {mount} from "headerSubApp/HeaderApp";//name/exposeName


function Apps() {
        return (
                <>
                        <GlobalStyle />
                        <StyledContainer>containers
                                {/* <App /> */}
                        </StyledContainer>
                </>
        );
}

export default Apps;
