import React from "react";
import "./HospitalList.css";
import { Icon } from "@iconify/react";
function HospitalList() {
  return (
    <div className="hospital">
      <div className="hospital__major">
        <div className="card">
          {/* <Icon icon="uil:hospital" width="100" height="100" /> */}
          <Icon
            icon="ri:hospital-fill"
            color="#d41111"
            width="100"
            height="100"
            hFlip={true}
          />
          <h3>Nearest Hospital to You</h3>
        </div>
        <div className="hospital__list">
          <table>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>
                <a href="https://www.yashodahospital.org/locations/ghaziabad">
                  Yashoda Super Specialty Hospital
                </a>
              </td>

              <td>H-1, Kaushambi, Near Anand Vihar ISBT, Ghaziabad - 201010</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.fortishealthcare.com/india/hospitals-in-uttar-pradesh/fortis-hospital-noida">
                  Fortis Hospital
                </a>
              </td>

              <td>B-22, Sector 62, Noida, Uttar Pradesh 201301</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.columbiaasia.com/india/hospitals/ghaziabad">
                  Columbia Asia Hospital
                </a>
              </td>

              <td>
                NH-24, Opposite Bahmeta Village, Hapur Road, Ghaziabad - 201001
              </td>
            </tr>
            <tr>
              <td>
                <a href=" https://www.maxhealthcare.in/hospital-network/max-super-speciality-hospital-vaishali">
                  Max Super Speciality Hospital
                </a>
              </td>

              <td>W-3, Near Dabur Chowk, Raj Nagar, Ghaziabad - 201002</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="ambulance__major">
        <div className="card">
          {/* <Icon icon="mdi:ambulance" width="100" height="100" /> */}
          <Icon
            icon="fxemoji:ambulance"
            color="#d41111"
            width="100"
            height="100"
            hFlip={true}
          />
          <h3>Nearest Ambulance to You</h3>
        </div>
        <div className="hospital__list">
          <table>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
            </tr>
            <tr>
              <td>Yashoda Hospital Ambulance Service</td>

              <td>+91-8448490009</td>
            </tr>
            <tr>
              <td>Fortis Hospital Ambulance Service</td>

              <td>+91-9582033333</td>
            </tr>
            <tr>
              <td>Columbia Asia Hospital Ambulance Service</td>

              <td>+91-9871010002</td>
            </tr>
            <tr>
              <td>Max Hospital Ambulance Service</td>

              <td>+91-9999572222</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HospitalList;
