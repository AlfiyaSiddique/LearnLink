import React, { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { Course } from '../state/actions';
import { Link } from 'react-router-dom';



const Landing:React.FC = () => {
    const dispatch = useDispatch();
    const {loadCourseData} = bindActionCreators(actionCreators, dispatch)
    const course: Course[] = useSelector((state: State)=>state.course)

    useEffect(()=>{
      loadCourseData()
    }, [])


  return (
    <div>
      Landing page
      {course.map((c, index)=>{
        return <Link key={index} to={'/course'}><button>{c.name}</button></Link>
      })}
    </div>
  )
}

export default Landing
