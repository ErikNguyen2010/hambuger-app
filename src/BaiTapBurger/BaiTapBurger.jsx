import React, { Component } from 'react'
import  "../assets/styles/css/baiTapBurger.css"
import {connect} from 'react-redux'
class BaiTapBurger extends Component {
    renderBreadMid = () =>{
        let {burger} = this.props.stateBurger
        return burger.map((item,key) =>{
            let arr = []
            for(let i = 0; i<item.soLuong; i++){
                arr.push(<div className={item.name} key={key}></div>)
            }
            return arr
        })
    }
    renderTongTien = () =>{
        let sum = 0
        for(let index of this.props.stateBurger.burger){
            sum += index.giaBan * index.soLuong
        }
        return sum
    }
  render() {
    return (
        <div className="container">
            <h3 className='display-4 text-success text-center'>
                Bài tập burger
            </h3>
            <div className="row">
                <div className="col-7">
                    <div className="breadTop"></div>
                        {this.renderBreadMid()}
                    <div className="breadBottom"></div>
                </div>
                <div className="col-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Thức ăn</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Giá</td>
                            </tr>
                        </thead>
                        <tbody>
                          {this.props.stateBurger.burger.map((item, key) =>{
                              return <tr key={key}>
                                    <td>{item.name}</td>
                                    <td>
                                        <button onClick={() =>{
                                            this.props.tangGiamSoLuong2(item.name,1)
                                        }} className="btn btn-success">+</button>
                                    </td>
                                    <td>{item.soLuong}</td>
                                    <td>
                                        <button onClick={() =>{
                                            this.props.tangGiamSoLuong2(item.name,-1)
                                        }} className="btn btn-primary">-</button>
                                    </td>
                                    <td>{item.giaBan * item.soLuong}</td>
                                </tr>
                          })}
                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Tổng tiền:</td>
                                <td>{this.renderTongTien()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>


    )
  }
}


const mapStateToProps = (rootReducer) =>{
    return{
        stateBurger: rootReducer.baiTapBurgerReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        tangGiamSoLuong2 : (name, value) =>{
            const action = {
                type : "TANG_GIAM_SO_LUONG_BURGER",
                name, value
            }
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger)
