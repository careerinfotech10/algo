function* fun(){
    yield 'my'
    yield 'name '
    yield 'is'
    yield 'utkarsh '
    yield 'patil'
}
let details=fun()
for(n of details){
    console.log(n)
}