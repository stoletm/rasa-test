import { useState, useEffect } from "react";


const useSlider = (data) => {

    const [index, setIndex] = useState(0);
    const [lastItem, setLastItem] = useState(false);
    const [firstItem, setFirstItem] = useState(true);

    
    const onNext = () => {
        if (!lastItem) {
            if (index < (data.length)) {
                setIndex((index) => index + 1)
            } else setLastItem(true)
        }
    }

    const onPrev = () => {
        if (!firstItem) {
            if (index > 0) {
                setIndex((index) => index - 1);
            } else setFirstItem(true)
        }
    }


    useEffect(() => {
        if (index === data.length-1) {
            setLastItem(true)
        } else if (index === 0) {
            setFirstItem(true)
        } else {
            setFirstItem(false);
            setLastItem(false);
        }
    },[data, index])

    let source = data[index]

    return {index, firstItem, lastItem, onPrev, onNext, source}
}

export default useSlider;