const parseData = (input) => {
    const {data, column} = input;
    const result = [];
    data.forEach((info) => {
        let tmp = {}
        column.forEach((value, index) => {
            tmp[value.name] = info[index]
        })
        result.push(tmp);
    })

    return result;
}

export { parseData };
