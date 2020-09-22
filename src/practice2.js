// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
// TODO 从先排序sections 和 反向插入 方面思考如何改进
const inject = (item, section) => {
    // TODO 当前场景下重新声明result没有太大必要
    const result = item
    // TODO 尝试使用 for循环 以外的遍历方式
    for(let i = 0; i < section.length; i++){ 
      result.splice(section[i].index+i, 0, section[i].content)
    }
    return result
  }
export { inject };
