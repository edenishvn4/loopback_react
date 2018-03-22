import React, { Component } from 'react';
import axios from 'axios';

class Getdata extends Component{
    constructor(){
        super();
        this.state={
            dataUser:[]
        }
      }
    klik(){
    axios.get('http://localhost:3210/api/Users').then((ambilData)=>{
        console.log(ambilData.data);
        this.setState({
            dataUser:ambilData.data
        })
     })
    }
      render(){
        const data= this.state.dataUser.map((item,index)=>{
            var id=item.id;
            var email=item.email;
            var nama = item.nama;
            return <tr><td key={index}>{id}</td><td key={index}>{nama}</td><td key={index}>{email}</td></tr>;
          })
          return(
              <div>       
                <br/>     
                <button type="submit" className="btn btn-success"onClick={()=>{this.klik();}}>Get data</button>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
               </div>
          )
      }
}
export default Getdata;