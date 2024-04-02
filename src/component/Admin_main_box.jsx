import React from 'react';
import { CiEdit } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import "../Style/Admin_main_box.css";


function Admin_main_box() {
  const caselist = [
    {caseNo:1,caseinfo:"adjasdjasbdjabjbasdbjashfadbfhadbfa", date:"12-12-2024"},
    {caseNo:2,caseinfo:"element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.", date:"12-12-2024"},
    {caseNo:3,caseinfo:"default, browsers separate paragraphs with a single blank line. Alternate separation methods, such as first-line indentation, can be achieved with CSS:bjbasdbjashfadbfhadbfa", date:"12-12-2024"},
   
  

  ]

  return (
    <div className='admin_main_box'>
      <div className='new-case'>
        <h2>CASES</h2>
      </div>
    <div className='upperBar'>
    <div className='search'>
      <i className='icon'><  IoSearchSharp /></i>
      <input placeholder='Search' className='search_section'></input>
    </div>
    <div className='drowpdown'>
    <form>
    <select id="gender" name="gender">
        <option value="ALL Cases">All Cases</option>
        <option value="New ">New Cases</option>
        <option value="other">Pending Cases</option>
    </select><br/><br/>
    </form> 
     </div>
    <div className='new-case-edit'>
      <i className='icon-edit'><CiEdit /></i>
      <button className='button_case'>ADD CASE</button>
    </div>
    </div>
    <div className='casesList'>
    <div className='listBox'>
      <div className='list' > 
      <p>Case ID</p>
      <p>Case Info</p>

      <p>Date</p>
      
      </div>
    {
      caselist && caselist.map((list) =>(
       <div> 
       <div className='listitem' > 
      <p>{list.caseNo}</p>
      <p>{list.caseinfo}</p>
      <p>{list.date}</p>
      </div>
       </div>
      )
      )
    }
    </div>
    </div>
    </div>
  )
}

export default Admin_main_box
