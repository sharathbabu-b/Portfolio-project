function SpecialChiper(str,rotation){
    let shifted=""
    for(let i=0;i<str.length;i++){
        let code=str.charCodeAt(i)
        let shiftedChar=String.fromCharCode(((code-65 + rotation)%26)+65);
        shifted+=shiftedChar
    }
    let result=""
    let count=1
    for(let i=1;i<=shifted.length;i++){
        if(shifted[i]===shifted[i-1]){
            count++;
        }else{
            result+=shifted[i-1]
            if(count>1){
                result+=count
            }
            count=1
        }
    }
    return result
}
console.log(SpecialChiper("AABCCC", 3))