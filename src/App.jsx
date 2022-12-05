import { StyledContainer } from "./setup/styled-components/styled_component";
import GlobalStyle from "./setup/styled-components/GlobalStyle";
import { useRef,useEffect } from "react";
//import sub app header module federation
import {mount} from "headerSubApp/HeaderApp";//name/exposeName


function Apps() {
        const headerRef=useRef(null)
        useEffect(()=>{
                console.log('mount: ', mount);
                console.log('headerRef: ', headerRef);
                mount(headerRef.current)
        },[])
        return (
                <>
                        <GlobalStyle />
                        <StyledContainer>
                                <div ref={headerRef}></div>
                        </StyledContainer>
                </>
        );
}
window.containerContext=true;
export default Apps;
