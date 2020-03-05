function stoppingNum(n, m, s){
    let startNum = Number(n);
    let endNum = Number(m);
    let stopNum = Number(s);

    for(let i = endNum; i >= startNum; i--){
        if(i % 2 == 0 && i % 3 == 0){
            if(i == stopNum){
                break;
            }
            console.log(i);
        }
    }
}

stoppingNum(1,36,12);