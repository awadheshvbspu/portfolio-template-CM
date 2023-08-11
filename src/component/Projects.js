import React,{useState,useEffect} from 'react';
import Project from './Project';

import { projectsData } from '../data';
import { projectsNav } from '../data';

export default function Projects() {
    const [item,setItem] =useState({name:'all'})
    const [project,setProject] = useState([]);
    const [active,setActive] = useState(0)

    useEffect(()=>{
     if(item.name=== 'all'){
        setProject(projectsData)
     } else{
        const newProjects = projectsData.filter((project) =>{
            return project.category.toLowerCase()=== item.name;
        });
        setProject(newProjects);
     }
    },[item])

    const handleClick = (e, i) =>{
        setItem({name:e.target.textContent.toLowerCase()})
        setActive(i);
    }
  return (
    <div>
        <div className='mb-12 max-w-xl mx-auto'>
      <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
        {projectsNav.map((item,i)=>{
            return(
                <li key={i} className={`${active === i ? 'active':''} cursor-pointer capitalize m-4`} onClick={(e)=>{handleClick(e, i)}}>{item.name}</li>
            )
        })}
      </ul>
    </div>
    {/* project grid */}
    <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {project.map((item)=> {
          return (
            <Project item={item} key={item.id}/>
          )
        })}
    </section>
    </div>
  )
}
