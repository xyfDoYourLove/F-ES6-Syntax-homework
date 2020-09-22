const parseData = (input) => {
    // TODO 解构可以优化到函数接受参数中
    const {data, column} = input;
    // TODO 使用map做数组与数组的转化，不用声明新数组
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
