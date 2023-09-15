import React,{Component} from "react";
class Arrayobjtable extends Component{
    constructor(props){
        super(props);
        this.state={
        studentdetails:[{sno:1,sname:"satish",technology:"Fullstackdeveloper"},
                        {sno:2,sname:"suresh",technology:"Javadeveloper"},
                        {sno:3,sname:"Kishore",technology:"Djangodeveloper"}]
        }
    }
    render(){
        const{studentdetails}=this.state;
        return(
            <div>
                <table>
                    <tr>
                        <th>Student No</th>
                        <th>  Student Name</th>
                        <th>Technology</th>
                    </tr>
                    {studentdetails.length>0&&studentdetails.map((student)=>{return <tr key={student.sno}>
                        <td>{student.sno}</td>
                        <td>{student.sname}</td>
                        <td>{student.technology}</td>
                    </tr>
                    })}
                </table>
            </div>
        )
    }
}
export default Arrayobjtable;