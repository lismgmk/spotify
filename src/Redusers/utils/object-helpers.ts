
export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
    return items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, objPropName: u[objPropName] + newObjProps}
        }
        return u;
    })
}

