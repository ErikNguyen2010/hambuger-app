const stateDefault = {
    burger: [
        {name: "salad", giaBan: "1000" ,soLuong: 1},
        {name: "cheese", giaBan: "1000" ,soLuong: 2},
        {name: "beef", giaBan: "1000" ,soLuong: 1},
    ]
,
   
}



export const baiTapBurgerReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case "TANG_GIAM_SO_LUONG_BURGER":{
            console.log(action);
            let newArr = [...state.burger]
            let result = newArr.find(item => item.name == action.name)
            if(result){
                result.soLuong += action.value
                if(result.soLuong < 1){
                    if(window.confirm("bạn có chắc không")){
                        result.soLuong = 0 
                    }else{
                        result.soLuong -= action.value
                    }
                }else if(result.soLuong ==0){
                    return
                }
            }
            state.burger = newArr
            return {...state}
        }
        default: return state
    }
}