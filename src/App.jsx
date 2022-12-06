import { StyledContainer } from "./setup/styled-components/styled_component";
import GlobalStyle from "./setup/styled-components/GlobalStyle";
import { useRef,useEffect } from "react";
//import sub app header module federation
import {mountHeader} from "headerSubApp/HeaderApp";//name/exposeName
import {mountMain} from "mainSubApp/MainApp";
import {mountFooter} from "footerSubApp/FooterApp";


function Apps() {
        const headerRef=useRef(null)
        const mainRef=useRef(null)
        const footerRef=useRef(null)
        useEffect(()=>{
                mountHeader(headerRef.current);
                mountMain(mainRef.current);
                mountFooter(footerRef.current);
        },[])
        return (
                <>
                        <GlobalStyle />
                        <StyledContainer>
                                <div ref={headerRef}></div>
                                <div ref={mainRef}></div>
                                <div ref={footerRef}></div>
                        </StyledContainer>
                </>
        );
}
window.containerContext=true;
export default Apps;
