const useRenderItems = (arr, Component, quantity) => {
    const items = arr.map((item, i) => {

        if (!quantity || i < quantity) {  //на рендер выведутся либо все компоненты, либо указанное количество
            return (
                    <Component key={i} data={item}/>
                    )
        }
    })
    return items
}

export default useRenderItems;