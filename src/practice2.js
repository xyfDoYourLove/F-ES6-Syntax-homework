const inject = (item, section) => {
    const result = item
    for(let i = 0; i < section.length; i++){ 
      result.splice(section[i].index+i, 0, section[i].content)
    }
    return result
  }
export { inject };
