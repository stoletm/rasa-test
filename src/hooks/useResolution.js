import { useMediaQuery } from "react-responsive";

const useResolution = () => {

const isDesktop = useMediaQuery({
    query: "(min-width: 1199px)"
});

const isTablet = useMediaQuery({
    query: "(max-width: 1199px)"
});

const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
});

    return {
        isDesktop,
        isTablet,
        isMobile,
    }

}

export default useResolution;