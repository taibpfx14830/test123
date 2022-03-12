import React from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from "react-moment";


function RenderStaffs({ staff }) {
  return (<>
    <div className="col-12 col-md-4 col-lg-3 pb-1">
      <img width="100%" src={staff.image} />
    </div>
    <div className=" col-12 col-md-8 col-lg-9 ">
      <h2>Họ và tên: {staff.name}</h2>
      <p> Ngày sinh: <Moment format="DD/MM/YYYY">{staff.doB}</Moment> </p>
      <p>Ngày vào công ty:{" "}<Moment format="DD/MM/YYYY">{staff.startDate}</Moment></p>
      <p>Phòng ban: {staff.department.name}</p>
      <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
      <p>Số ngày làm thêm: {staff.overTime}</p>
    </div>
  </>
  )
}

const DetailStaff = (props) => {
  
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem> <Link to="/home" className="text-link">Nhân viên</Link> </BreadcrumbItem>
          <BreadcrumbItem className="text-link" active>{props.staff.name} </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <RenderStaffs staff={props.staff} />
        {/* component render thẻ staff */}
      </div>
    </div>
  )
}

export default DetailStaff;

